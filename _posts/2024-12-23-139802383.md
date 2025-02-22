---
title: 2024-12-23-Java-中的监听器Listener
date: 2024-12-23 16:39:48 +0800
categories: [java]
tags: [java,设计模式,观察者模式]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=139802383
  alt: Java-中的监听器Listener
artid: 139802383
render_with_liquid: false
---
</p>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     Java 中的监听器（Listener）
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="htmledit_views" id="content_views">
    <h3>
     1,监听器模式的基本原理
    </h3>
    <p>
     监听器模式由以下几个部分组成：
    </p>
    <ol>
     <li>
      <strong>
       事件源（Event Source）
      </strong>
      ：产生事件的对象。
     </li>
     <li>
      <strong>
       事件对象（Event Object）
      </strong>
      ：封装了事件的详细信息。
     </li>
     <li>
      <strong>
       监听器接口（Listener Interface）
      </strong>
      ：定义了响应特定事件的方法。
     </li>
     <li>
      <strong>
       监听器实现（Listener Implementation）
      </strong>
      ：实现监听器接口，包含具体的事件处理逻辑。
     </li>
    </ol>
    <h4>
     监听器模式的步骤
    </h4>
    <ol>
     <li>
      <strong>
       定义事件类
      </strong>
      ：创建一个事件类，用于封装事件信息。
     </li>
     <li>
      <strong>
       定义监听器接口
      </strong>
      ：创建一个接口，定义响应事件的方法。
     </li>
     <li>
      <strong>
       实现监听器接口
      </strong>
      ：创建一个类，实现监听器接口，并在方法中编写事件处理逻辑。
     </li>
     <li>
      <strong>
       注册监听器
      </strong>
      ：将监听器对象注册到事件源中，当事件发生时，事件源会通知监听器并调用相应的方法。
     </li>
    </ol>
    <h3>
     2,实际应用场景
    </h3>
    <h4>
     2.1  图形用户界面（GUI）事件处理
    </h4>
    <p>
     监听器模式广泛应用于图形用户界面（GUI）编程中，用于处理用户交互事件。
    </p>
    <ul>
     <li>
      <strong>
       按钮点击事件
      </strong>
      ：当用户点击按钮时，触发相应的事件处理程序。
     </li>
     <li>
      <strong>
       鼠标事件
      </strong>
      ：处理鼠标点击、移动、进入、退出等事件。
     </li>
     <li>
      <strong>
       键盘事件
      </strong>
      ：处理键盘按下、释放等事件。
     </li>
     <li>
      <strong>
       窗口事件
      </strong>
      ：处理窗口打开、关闭、最小化、最大化等事件。
     </li>
    </ul>
    <pre><code class="language-java">JButton button = new JButton("Click Me");
button.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        System.out.println("Button clicked!");
    }
});
</code></pre>
    <h4>
     2.2 数据模型更新通知
    </h4>
    <p>
     监听器模式用于通知数据模型的变化，通常用于实现观察者模式。当数据发生变化时，所有注册的监听器都会被通知更新。
    </p>
    <ul>
     <li>
      <strong>
       MVC 模式
      </strong>
      ：在模型-视图-控制器（MVC）架构中，当模型数据发生变化时，视图需要更新以反映变化。
     </li>
     <li>
      <strong>
       数据绑定
      </strong>
      ：在某些框架中，监听器用于实现数据绑定，当数据源变化时自动更新界面。
     </li>
    </ul>
    <pre><code class="language-java">public class DataModel {
    private List&lt;DataChangeListener&gt; listeners = new ArrayList&lt;&gt;();

    public void addDataChangeListener(DataChangeListener listener) {
        listeners.add(listener);
    }

    public void removeDataChangeListener(DataChangeListener listener) {
        listeners.remove(listener);
    }

    public void notifyDataChange() {
        for (DataChangeListener listener : listeners) {
            listener.dataChanged();
        }
    }
}

public interface DataChangeListener {
    void dataChanged();
}
</code></pre>
    <h4>
     2.3  日志系统
    </h4>
    <p>
     日志系统可以使用监听器模式将日志信息发送到多个不同的目的地（例如控制台、文件、远程服务器等）。
    </p>
    <ul>
     <li>
      <strong>
       多重日志处理
      </strong>
      ：一个日志事件可以被多个日志处理程序监听和处理，确保日志信息被保存到多个地方。
     </li>
    </ul>
    <pre><code class="language-java">public class Logger {
    private List&lt;LogListener&gt; listeners = new ArrayList&lt;&gt;();

    public void addLogListener(LogListener listener) {
        listeners.add(listener);
    }

    public void removeLogListener(LogListener listener) {
        listeners.remove(listener);
    }

    public void log(String message) {
        for (LogListener listener : listeners) {
            listener.onLog(message);
        }
    }
}

public interface LogListener {
    void onLog(String message);
}
</code></pre>
    <h4>
     2.4 文件系统监控
    </h4>
    <h4>
    </h4>
    <p>
     监听器模式用于监控文件系统的变化，例如文件的创建、修改、删除等事件。
    </p>
    <ul>
     <li>
      <strong>
       文件监控工具
      </strong>
      ：某些工具可以监听特定目录的变化，当有文件变化时触发相应的处理。
     </li>
    </ul>
    <pre><code class="language-java">Path path = Paths.get("/path/to/directory");
WatchService watchService = FileSystems.getDefault().newWatchService();
path.register(watchService, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_DELETE, StandardWatchEventKinds.ENTRY_MODIFY);

while (true) {
    WatchKey key = watchService.take();
    for (WatchEvent&lt;?&gt; event : key.pollEvents()) {
        WatchEvent.Kind&lt;?&gt; kind = event.kind();
        Path fileName = (Path) event.context();
        System.out.println(kind + ": " + fileName);
    }
    key.reset();
}
</code></pre>
    <h4>
     2.5 网络和分布式系统
    </h4>
    <p>
     监听器模式用于处理网络和分布式系统中的异步事件，例如消息的到达、连接的建立或断开等。
    </p>
    <ul>
     <li>
      <strong>
       消息队列
      </strong>
      ：监听器模式用于处理消息队列中的消息，当消息到达时触发相应的处理程序。
     </li>
     <li>
      <strong>
       网络连接
      </strong>
      ：在网络编程中，监听器用于处理连接的建立、断开和数据接收等事件。
     </li>
    </ul>
    <pre><code class="language-java">public interface MessageListener {
    void onMessage(String message);
}

public class MessageQueue {
    private List&lt;MessageListener&gt; listeners = new ArrayList&lt;&gt;();

    public void addMessageListener(MessageListener listener) {
        listeners.add(listener);
    }

    public void removeMessageListener(MessageListener listener) {
        listeners.remove(listener);
    }

    public void receiveMessage(String message) {
        for (MessageListener listener : listeners) {
            listener.onMessage(message);
        }
    }
}
</code></pre>
    <h4>
     2.6 任务调度和异步处理
    </h4>
    <p>
     监听器模式用于任务调度和异步处理，允许任务在完成后通知监听器进行后续处理。
    </p>
    <ul>
     <li>
      <strong>
       任务完成通知
      </strong>
      ：当任务完成时，触发监听器执行相应的后续操作。
     </li>
     <li>
      <strong>
       异步事件处理
      </strong>
      ：处理异步事件，当事件发生时通知监听器。
     </li>
    </ul>
    <pre><code class="language-java">public interface TaskCompleteListener {
    void onTaskComplete();
}

public class Task {
    private List&lt;TaskCompleteListener&gt; listeners = new ArrayList&lt;&gt;();

    public void addTaskCompleteListener(TaskCompleteListener listener) {
        listeners.add(listener);
    }

    public void removeTaskCompleteListener(TaskCompleteListener listener) {
        listeners.remove(listener);
    }

    public void complete() {
        for (TaskCompleteListener listener : listeners) {
            listener.onTaskComplete();
        }
    }
}
</code></pre>
    <h3>
     3 自定义监听器
    </h3>
    <h4>
     3.1 Java 中常见的监听器接口
    </h4>
    <ul>
     <li>
      <strong>
       ActionListener
      </strong>
      ：用于处理动作事件，例如按钮点击。
     </li>
     <li>
      <strong>
       MouseListener
      </strong>
      ：用于处理鼠标事件，例如鼠标点击、进入、退出等。
     </li>
     <li>
      <strong>
       KeyListener
      </strong>
      ：用于处理键盘事件，例如按键按下、释放等。
     </li>
     <li>
      <strong>
       WindowListener
      </strong>
      ：用于处理窗口事件，例如窗口打开、关闭等。
     </li>
     <li>
      <strong>
       FocusListener
      </strong>
      ：用于处理组件焦点事件。
     </li>
    </ul>
    <h4>
     3,2 使用自定义监听器
    </h4>
    <p>
     有时你可能需要定义自己的事件和监听器。以下是一个示例，展示如何创建和使用自定义监听器。
    </p>
    <h5>
     3,2,1 定义事件类
    </h5>
    <pre><code class="language-java">import java.util.EventObject;

public class CustomEvent extends EventObject {
    public CustomEvent(Object source) {
        super(source);
    }
}
</code></pre>
    <h5>
     3.2.2 定义监听器接口
    </h5>
    <pre><code class="language-java">import java.util.EventListener;

public interface CustomEventListener extends EventListener {
    void handleEvent(CustomEvent event);
}
</code></pre>
    <h5>
     3.2.3 实现事件源类
    </h5>
    <pre><code class="language-java">import java.util.ArrayList;
import java.util.List;

public class EventSource {
    private final List&lt;CustomEventListener&gt; listeners = new ArrayList&lt;&gt;();

    public void addCustomEventListener(CustomEventListener listener) {
        listeners.add(listener);
    }

    public void removeCustomEventListener(CustomEventListener listener) {
        listeners.remove(listener);
    }

    public void triggerEvent() {
        CustomEvent event = new CustomEvent(this);
        for (CustomEventListener listener : listeners) {
            listener.handleEvent(event);
        }
    }
}
</code></pre>
    <h5>
     3.2.4 使用自定义监听器
    </h5>
    <pre><code class="language-java">public class CustomEventListenerExample {
    public static void main(String[] args) {
        EventSource eventSource = new EventSource();

        // 添加自定义事件监听器
        eventSource.addCustomEventListener(new CustomEventListener() {
            @Override
            public void handleEvent(CustomEvent event) {
                System.out.println("Custom event triggered!");
            }
        });

        // 触发事件
        eventSource.triggerEvent();
    }
}
</code></pre>
    <h3>
     4 总结
    </h3>
    <p>
     监听器模式是一种强大的设计模式，适用于需要处理异步事件和通知的场景。通过使用监听器模式，可以实现松耦合的事件处理逻辑，提高代码的可维护性和扩展性。无论是在 GUI 编程、数据模型更新、日志系统、文件系统监控、网络编程还是任务调度中，监听器模式都提供了一种高效的事件处理机制。
    </p>
   </div>
  </div>
 </article>
</div>


<p class="artid" style="display:none">68747470733a2f2f62:6c6f672e6373646e2e6e65742f6d305f37343837303932312f:61727469636c652f64657461696c732f313339383032333833
