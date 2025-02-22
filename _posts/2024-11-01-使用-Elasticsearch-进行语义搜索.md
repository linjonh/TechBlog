---
layout: post
title: 使用-Elasticsearch-进行语义搜索
date: 2024-11-01 11:45:33 +0800
categories: [Elasticsearch,Elastic,AI]
tags: [搜索引擎,大数据,全文检索,python,elasticsearch]
image:
    path: https://api.vvhan.com/api/bing?rand=sj&artid=143427074
    alt: 使用-Elasticsearch-进行语义搜索
artid: 143427074
render_with_liquid: false
---
<p class="artid" style="display:none">$url</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     使用 Elasticsearch 进行语义搜索
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <p class="img-center">
     <img alt="" height="427" src="https://i-blog.csdnimg.cn/direct/ef7c63ff863649728e9b8740001713b1.png" width="800"/>
    </p>
    <p>
     Elasticsearch 是一款功能强大的开源搜索引擎，可用于全文搜索、分析和数据可视化。传统上，Elasticsearch 以其执行基于关键字/词汇的搜索的能力而闻名，其中文档基于精确或部分关键字匹配进行匹配。然而，Elasticsearch 已经发展到支持语义搜索 —— 一种专注于理解单词和短语背后的含义，而不仅仅是匹配关键字的方法。
    </p>
    <p>
     Elasticsearch 中的语义搜索可实现更直观和上下文感知的搜索体验，即使查询中没有精确的关键字，也可以找到相关信息。本文将探讨如何在 Elasticsearch 中实现语义搜索、其优势和实际用例。
    </p>
    <p>
    </p>
    <h2>
     语义搜索
    </h2>
    <p>
     语义搜索是一种超越传统基于关键字的搜索的技术，它考虑了搜索查询的上下文、意图和含义。与专注于文字匹配的关键字搜索不同，语义搜索了解单词和概念之间的关系，从而实现更准确、更相关的搜索结果。
    </p>
    <p>
     例如，在基于关键字的搜索中，查询 “laptop battery life” 可能会返回包含这些确切单词的文档。但是，语义搜索可能会返回讨论相关概念的文档，例如 “long-lasting laptops”、“energy-efficient devices”，甚至 “portable computers with extended battery life.”。
    </p>
    <p>
    </p>
    <h2>
     Elasticsearch 如何支持语义搜索
    </h2>
    <p>
     Elasticsearch 通过多种技术组合支持语义搜索，包括：
    </p>
    <ul>
     <li>
      <strong>
       向量表示
      </strong>
      ：使用预训练模型（如 BERT（来自 Transformers 的双向编码器表示））将文本转换为可捕获语义含义的密集向量嵌入。
     </li>
     <li>
      <strong>
       相似度评分
      </strong>
      ：测量查询向量和文档向量之间的相似度，以根据语义相关性对搜索结果进行排名。
     </li>
     <li>
      <strong>
       自定义分析器
      </strong>
      ：创建自定义标记器、过滤器和分析器，以增强语义理解的方式预处理文本数据。
     </li>
     <li>
      <strong>
       与机器学习模型集成
      </strong>
      ：利用与 Elasticsearch 集成的机器学习模型执行实体识别、情感分析等任务
     </li>
    </ul>
    <p>
    </p>
    <h2>
     架构 —— 使用 Elasticsearch 进行语义搜索
    </h2>
    <p style="text-align:center;">
     <img alt="" src="https://i-blog.csdnimg.cn/direct/11a920803ab34b14bf7f1036696d753b.webp"/>
    </p>
    <p>
     Elasticsearch 中两个非常重要的概念是文档和索引。
    </p>
    <p>
    </p>
    <h2>
     文档
    </h2>
    <p>
     文档是字段及其相关值的集合。每个文档都是一个 JSON 对象，其中包含结构化格式的数据。例如，代表一本书的文档可能包含标题、作者和出版日期等字段。
    </p>
    <p>
    </p>
    <h2>
     索引
    </h2>
    <p>
     索引是文档的集合，以高度优化的格式存储，旨在执行高效搜索。索引类似于关系数据库中的表，但它们更灵活，可以存储复杂的数据结构。
    </p>
    <p>
     要使用 Elasticsearch，你需要将数据组织成文档，然后将所有文档添加到索引中。这使 Elasticsearch 能够根据搜索查询高效地搜索和检索相关文档。
    </p>
    <p>
    </p>
    <h2>
     在 Elasticsearch 中实现语义搜索
    </h2>
    <p>
    </p>
    <h3>
     1. 设置 Elasticsearch
    </h3>
    <p>
     首先，确保你已启动并运行 Elasticsearch。你可以通过启动 Elasticsearch 的 Docker 容器来远程连接到 elasticsearch：
    </p>
    <pre><code class="hljs">docker run -it \
    --rm \
    --name elasticsearch \
    -p 9200:9200 \
    -p 9300:9300 \
    -e "discovery.type=single-node" \
    -e "xpack.security.enabled=false" \
    docker.elastic.co/elasticsearch/elasticsearch:8.4.3</code></pre>
    <p>
    </p>
    <h3>
     2. 数据加载和预处理
    </h3>
    <p>
     在此步骤中，我们将加载 documents.json 文件并对其进行预处理，以使层次结构扁平化，使其适合Elasticsearch。documents.json文件包含课程列表，每个课程都有一个文档列表。我们将提取每个文档并向其中添加一个课程字段，指示它属于哪个课程。
    </p>
    <pre><code class="hljs">import json

with open('documents.json', 'rt') as f_in:
    docs_raw = json.load(f_in)</code></pre>
    <p>
     Elasticsearch 要求所有内容都处于同一层次结构中，在本例中，我们有两个层次，course 和 documents：
    </p>
    <pre><code class="hljs">documents = []

for course_dict in docs_raw:
    for doc in course_dict['documents']:
        doc['course'] = course_dict['course']
        documents.append(doc)

documents[1]
#Output
{'text': 'GitHub - DataTalksClub data-engineering-zoomcamp#prerequisites',
 'section': 'General course-related questions',
 'question': 'Course - What are the prerequisites for this course?',
 'course': 'data-engineering-zoomcamp'}
</code></pre>
    <p>
    </p>
    <h3>
     3. 使用预训练模型创建嵌入
    </h3>
    <p>
     要执行语义搜索，我们需要将文档转换为密集向量（嵌入），以捕获文本的语义含义。我们将使用来自 Sentence Transformers 库的预训练模型来生成这些嵌入。然后将这些嵌入编入 Elasticsearch 索引。这些嵌入使我们能够执行语义搜索，其目标是找到与给定查询上下文相似的文本。
    </p>
    <p>
     文本和问题字段是包含主要信息的实际数据字段，而其他字段（如 section 和 course）则更具分类性，信息量较少，无法创建有意义的嵌入。
    </p>
    <ul>
     <li>
      安装 sentence_transformers 库。
     </li>
     <li>
      加载预训练模型并使用它来为我们的文档生成嵌入。
     </li>
    </ul>
    <pre><code class="hljs">from sentence_transformers import SentenceTransformer
model = SentenceTransformer("all-mpnet-base-v2")


#created the dense vector using the pre-trained model
operations = []
for doc in documents:
    # Transforming the title into an embedding using the model
    doc["text_vector"] = model.encode(doc["text"]).tolist()
    operations.append(doc)</code></pre>
    <p>
    </p>
    <h3>
     4. 连接到 Elasticsearch
    </h3>
    <p>
     在此步骤中，我们将建立与 Elasticsearch 实例的连接。确保 Elasticsearch 正在运行。
    </p>
    <pre><code class="hljs">from elasticsearch import Elasticsearch


# Connect to the Elasticsearch instance
es_client = Elasticsearch('http://localhost:9200')
# Check the connection
print(es_client.info())</code></pre>
    <p>
    </p>
    <h3>
     5. 创建映射和索引
    </h3>
    <p>
     我们将定义映射并在 Elasticsearch 中创建索引，生成的嵌入也将存储在其中。
    </p>
    <p>
     映射是指定如何在 Elasticsearch 中构建和索引文档及其字段的过程。每个文档由各种字段组成，每个字段都分配有特定的数据类型。
    </p>
    <p>
     与数据库模式类似，映射概述了文档的结构，详细说明了字段、它们的数据类型（例如字符串、整数或日期）以及如何索引和存储这些字段。
    </p>
    <p>
     通过定义文档和索引，我们确保索引就像书中的目录一样，有助于高效搜索。
    </p>
    <pre><code class="hljs">index_settings = {
    "settings": {
        "number_of_shards": 1,
        "number_of_replicas": 0
    },
    "mappings": {
        "properties": {
            "text": {"type": "text"},
            "section": {"type": "text"},
            "question": {"type": "text"},
            "course": {"type": "keyword"},
            "text_vector": {"type": "dense_vector", "dims": 768, "index": True, "similarity": "cosine"},
        }
    }
}

index_name = "course-questions"
# Delete the index if it exists
es_client.indices.delete(index=index_name, ignore_unavailable=True)
# Create the index
es_client.indices.create(index=index_name, body=index_settings)
</code></pre>
    <p>
    </p>
    <h3>
     6. 将文档添加到索引
    </h3>
    <p>
     然后，我们将预处理后的文档及其嵌入添加到 Elasticsearch 索引中。这使得 Elasticsearch 能够有效地存储和管理文档，从而实现快速准确的搜索查询。
    </p>
    <pre><code class="hljs">for doc in operations:
    try:
        es_client.index(index=index_name, document=doc)
    except Exception as e:
        print(e)</code></pre>
    <p>
    </p>
    <h3>
     7. 查询搜索引擎
    </h3>
    <p>
     当用户输入搜索查询时，它会被转换为嵌入并在 Elasticsearch 索引中进行搜索。结果会根据其与查询的相关性进行评分。
    </p>
    <pre><code class="hljs">search_term = "windows or mac?"
vector_search_term = model.encode(search_term)

query = {
    "field": "text_vector",
    "query_vector": vector_search_term,
    "k": 5,
    "num_candidates": 10000, 
}
res = es_client.search(index=index_name, knn=query, source=["text", "section", "question", "course"])
res["hits"]["hits"]
</code></pre>
    <p>
    </p>
    <h2>
     执行关键字搜索和高级搜索（过滤结果）
    </h2>
    <p>
     只要你直接使用用户输入并将该信息传递到你的搜索功能中，这就变成了关键字搜索。
    </p>
    <pre><code class="hljs">response = es_client.search(
    index=index_name,
    query={
        "bool": {
            "must": {
             "multi_match": 
                        {"query": "windows or python?", 
                         "fields": ["text", "question","course","title"],
                         "type": "best_fields"
                        }
                    },
            "filter": {
                "term": {
                        "course": "data-engineering-zoomcamp"
            }
        }
        }
    }
)</code></pre>
    <p>
    </p>
    <h2>
     执行语义搜索和高级搜索
    </h2>
    <p>
     为了让 Elasticsearch 执行语义搜索，我们应该传递从最终用户那里收到的信息并将其转换为向量嵌入，并且该向量嵌入是传递到搜索函数中的向量嵌入。
    </p>
    <pre><code class="hljs">knn_query= {
    "field": "text_vector",
    "query_vector":vector_search_term,
    "k": 5,
    "num_candidates" : 10000
}
response=es_client.search(index=index_name,
                          query={
                              "match": {
                                  "course": "data-engineering-zoomcamp"
                              },
                          },
                           knn=knn_query,
                          size=5,
                          explain=True
                         )</code></pre>
    <p>
    </p>
    <p>
     以下是主要步骤的简要介绍：
    </p>
    <p>
     将从最终用户收到的搜索词转换为向量嵌入。
    </p>
    <ul>
     <li>
      将此向量嵌入传递到高级语义搜索函数中。
     </li>
     <li>
      将结果限制在特定部分，在本例中为 “General course-related questions”。同样，它可以限制为特定课程，例如 “Data Engineering Zoom Camp.”。基本语义搜索和高级语义搜索之间的一个显着区别在于结果的评分。基本语义搜索分数范围在 0 到 1 之间，其中 0 表示匹配度低，1 表示匹配度高。
     </li>
    </ul>
    <p>
     使用 Explain 关键字解释分数为了进一步了解分数计算，Elasticsearch 提供了 explain=true 关键字。此工具描述了如何计算分数，提供了有价值的见解。有了这些信息，人们可以开发出更符合特定用户或业务需求的自定义评分函数。
    </p>
    <p>
    </p>
    <p>
     更多阅读，请参阅：
     <a class="link-info" href="https://elasticstack.blog.csdn.net/article/details/134027336" rel="nofollow" title="Elasticsearch：使用 Open AI 和 Langchain 的 RAG - Retrieval Augmented Generation （二）">
      Elasticsearch：使用 Open AI 和 Langchain 的 RAG - Retrieval Augmented Generation （二）
     </a>
    </p>
    <p>
    </p>
   </div>
  </div>
  <div class="blog-extension-box" id="blogExtensionBox" style="width:400px;margin:auto;margin-top:12px">
  </div>
 </article>
</div>


