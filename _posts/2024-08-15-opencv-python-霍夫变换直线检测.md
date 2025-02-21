---
layout: post
title: 2024-08-15-opencv-python-霍夫变换直线检测
date: 2024-08-15 16:53:08 +0800
categories: [Python]
tags: [opencv,python,人工智能,霍夫变换,HoughLines,直线检测]
image:
  path: https://api.vvhan.com/api/bing?rand=sj&artid=136578533
  alt: opencv-python-霍夫变换直线检测
artid: 136578533
---
<span class="artid" style="display:none" artid=68747470733a2f2f62:6c6f672e6373646e2e6e65742f6d305f33373831363932322f:61727469636c652f64657461696c732f313336353738353333></span>
<div class="blog-content-box">
 <div class="article-header-box">
  <div class="article-header">
   <div class="article-title-box">
    <h1 class="title-article" id="articleContentId">
     opencv-python 霍夫变换直线检测
    </h1>
   </div>
  </div>
 </div>
 <article class="baidu_pl">
  <div class="article_content clearfix" id="article_content">
   <link href="../../assets/css/kdoc_html_views-1a98987dfd.css" rel="stylesheet"/>
   <link href="../../assets/css/ck_htmledit_views-704d5b9767.css" rel="stylesheet"/>
   <div class="markdown_views prism-atom-one-dark" id="content_views">
    <svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
     <path d="M5,0 0,2.5 5,5z" id="raphael-marker-block" stroke-linecap="round" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
     </path>
    </svg>
    <p>
    </p>
    <div class="toc">
     <h4>
      文章目录
     </h4>
     <ul>
      <li>
       <ul>
        <li>
         <a href="#_2" rel="nofollow">
          原理
         </a>
        </li>
        <li>
         <a href="#_28" rel="nofollow">
          实战
         </a>
        </li>
       </ul>
      </li>
     </ul>
    </div>
    <p>
    </p>
    <h3>
     <a id="_2">
     </a>
     原理
    </h3>
    <p>
     霍夫变换（Hough Transform）是一种在图像处理中用来识别图像中直线、圆和其他形状的数学变换，是Hough在1962年提出的。其核心思想是将图像中的点映射到一个参数空间，这个空间中涵盖了某个几何形状的所有参数。通过这种变换，可以将图像中的点对应到参数空间中的线或圆上，从而实现对直线和圆的检测。
    </p>
    <p>
     霍夫变换的基本步骤通常包括：
    </p>
    <ol>
     <li>
      边缘检测：首先，使用Canny边缘检测器或其他边缘检测算法来检测图像中的边缘点。
     </li>
     <li>
      参数空间初始化：创建一个参数空间，对于直线检测，参数空间通常是一个角度
      <span class="katex--inline">
       <span class="katex">
        <span class="katex-mathml">
         θ 
         
        
       
         \theta
        </span>
        <span class="katex-html">
         <span class="base">
          <span class="strut" style="height: 0.6944em;">
          </span>
          <span class="mord mathnormal" style="margin-right: 0.0278em;">
           θ
          </span>
         </span>
        </span>
       </span>
      </span>
      和距离
      <span class="katex--inline">
       <span class="katex">
        <span class="katex-mathml">
         θ 
         
        
       
         \theta
        </span>
        <span class="katex-html">
         <span class="base">
          <span class="strut" style="height: 0.6944em;">
          </span>
          <span class="mord mathnormal" style="margin-right: 0.0278em;">
           θ
          </span>
         </span>
        </span>
       </span>
      </span>
      的笛卡尔网格；对于圆检测，参数空间通常是一个半径
      <span class="katex--inline">
       <span class="katex">
        <span class="katex-mathml">
         r 
         
        
       
         r
        </span>
        <span class="katex-html">
         <span class="base">
          <span class="strut" style="height: 0.4306em;">
          </span>
          <span class="mord mathnormal" style="margin-right: 0.0278em;">
           r
          </span>
         </span>
        </span>
       </span>
      </span>
      和圆心角度
      <span class="katex--inline">
       <span class="katex">
        <span class="katex-mathml">
         θ 
         
        
       
         \theta
        </span>
        <span class="katex-html">
         <span class="base">
          <span class="strut" style="height: 0.6944em;">
          </span>
          <span class="mord mathnormal" style="margin-right: 0.0278em;">
           θ
          </span>
         </span>
        </span>
       </span>
      </span>
      的极坐标网格。
     </li>
     <li>
      投票过程：对于检测到的每个边缘点，计算它在参数空间中对应的所有可能的线或圆的参数。这些参数代表了图像空间中所有可能的几何形状。对于每个参数，进行累加投票，即在参数空间中对应的线或圆的位置增加一个计数。
     </li>
     <li>
      阈值化：设定一个阈值，只保留投票数超过阈值的参数。这样可以排除噪声和边缘点引起的干扰。
     </li>
     <li>
      参数解码：最后，将参数空间中投票最多的点解码回图像空间，这些点就是检测到的直线或圆的参数。
     </li>
    </ol>
    <p>
     霍夫变换的直线检测结果由
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        ( 
        
       
         ρ 
        
       
         , 
        
       
         θ 
        
       
         ) 
        
       
      
        (\rho, \theta)
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 1em; vertical-align: -0.25em;">
         </span>
         <span class="mopen">
          (
         </span>
         <span class="mord mathnormal">
          ρ
         </span>
         <span class="mpunct">
          ,
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord mathnormal" style="margin-right: 0.0278em;">
          θ
         </span>
         <span class="mclose">
          )
         </span>
        </span>
       </span>
      </span>
     </span>
     来表示，其中
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        ρ 
        
       
      
        \rho
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.625em; vertical-align: -0.1944em;">
         </span>
         <span class="mord mathnormal">
          ρ
         </span>
        </span>
       </span>
      </span>
     </span>
     表示直线与坐标原点
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        ( 
        
       
         0 
        
       
         , 
        
       
         0 
        
       
         ) 
        
       
      
        (0,0)
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 1em; vertical-align: -0.25em;">
         </span>
         <span class="mopen">
          (
         </span>
         <span class="mord">
          0
         </span>
         <span class="mpunct">
          ,
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord">
          0
         </span>
         <span class="mclose">
          )
         </span>
        </span>
       </span>
      </span>
     </span>
     的距离，
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        θ 
        
       
      
        \theta
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.6944em;">
         </span>
         <span class="mord mathnormal" style="margin-right: 0.0278em;">
          θ
         </span>
        </span>
       </span>
      </span>
     </span>
     是直线的垂线与
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        x 
        
       
      
        x
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.4306em;">
         </span>
         <span class="mord mathnormal">
          x
         </span>
        </span>
       </span>
      </span>
     </span>
     轴的夹角。从而直线方程可表示为点法式
    </p>
    <p>
     <span class="katex--display">
      <span class="katex-display">
       <span class="katex">
        <span class="katex-mathml">
         x 
         
        
          cos 
         
        
          ⁡ 
         
        
          θ 
         
        
          + 
         
        
          y 
         
        
          sin 
         
        
          ⁡ 
         
        
          θ 
         
        
          − 
         
        
          ρ 
         
        
          = 
         
        
          0 
         
        
       
         x\cos\theta+y\sin\theta-\rho=0
        </span>
        <span class="katex-html">
         <span class="base">
          <span class="strut" style="height: 0.7778em; vertical-align: -0.0833em;">
          </span>
          <span class="mord mathnormal">
           x
          </span>
          <span class="mspace" style="margin-right: 0.1667em;">
          </span>
          <span class="mop">
           cos
          </span>
          <span class="mspace" style="margin-right: 0.1667em;">
          </span>
          <span class="mord mathnormal" style="margin-right: 0.0278em;">
           θ
          </span>
          <span class="mspace" style="margin-right: 0.2222em;">
          </span>
          <span class="mbin">
           +
          </span>
          <span class="mspace" style="margin-right: 0.2222em;">
          </span>
         </span>
         <span class="base">
          <span class="strut" style="height: 0.8889em; vertical-align: -0.1944em;">
          </span>
          <span class="mord mathnormal" style="margin-right: 0.0359em;">
           y
          </span>
          <span class="mspace" style="margin-right: 0.1667em;">
          </span>
          <span class="mop">
           sin
          </span>
          <span class="mspace" style="margin-right: 0.1667em;">
          </span>
          <span class="mord mathnormal" style="margin-right: 0.0278em;">
           θ
          </span>
          <span class="mspace" style="margin-right: 0.2222em;">
          </span>
          <span class="mbin">
           −
          </span>
          <span class="mspace" style="margin-right: 0.2222em;">
          </span>
         </span>
         <span class="base">
          <span class="strut" style="height: 0.625em; vertical-align: -0.1944em;">
          </span>
          <span class="mord mathnormal">
           ρ
          </span>
          <span class="mspace" style="margin-right: 0.2778em;">
          </span>
          <span class="mrel">
           =
          </span>
          <span class="mspace" style="margin-right: 0.2778em;">
          </span>
         </span>
         <span class="base">
          <span class="strut" style="height: 0.6444em;">
          </span>
          <span class="mord">
           0
          </span>
         </span>
        </span>
       </span>
      </span>
     </span>
    </p>
    <p>
     对于尺寸为
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        m 
        
       
      
        m
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.4306em;">
         </span>
         <span class="mord mathnormal">
          m
         </span>
        </span>
       </span>
      </span>
     </span>
     行
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        n 
        
       
      
        n
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.4306em;">
         </span>
         <span class="mord mathnormal">
          n
         </span>
        </span>
       </span>
      </span>
     </span>
     列的图像来说，四个边框分别是
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        x 
        
       
         = 
        
       
         0 
        
       
         , 
        
       
         x 
        
       
         = 
        
       
         n 
        
       
         , 
        
       
         y 
        
       
         = 
        
       
         0 
        
       
         , 
        
       
         y 
        
       
         = 
        
       
         m 
        
       
      
        x=0, x=n, y=0, y=m
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.4306em;">
         </span>
         <span class="mord mathnormal">
          x
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
         <span class="mrel">
          =
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
        </span>
        <span class="base">
         <span class="strut" style="height: 0.8389em; vertical-align: -0.1944em;">
         </span>
         <span class="mord">
          0
         </span>
         <span class="mpunct">
          ,
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord mathnormal">
          x
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
         <span class="mrel">
          =
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
        </span>
        <span class="base">
         <span class="strut" style="height: 0.625em; vertical-align: -0.1944em;">
         </span>
         <span class="mord mathnormal">
          n
         </span>
         <span class="mpunct">
          ,
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord mathnormal" style="margin-right: 0.0359em;">
          y
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
         <span class="mrel">
          =
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
        </span>
        <span class="base">
         <span class="strut" style="height: 0.8389em; vertical-align: -0.1944em;">
         </span>
         <span class="mord">
          0
         </span>
         <span class="mpunct">
          ,
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord mathnormal" style="margin-right: 0.0359em;">
          y
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
         <span class="mrel">
          =
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
        </span>
        <span class="base">
         <span class="strut" style="height: 0.4306em;">
         </span>
         <span class="mord mathnormal">
          m
         </span>
        </span>
       </span>
      </span>
     </span>
     ，记
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        c 
        
       
         = 
        
       
         cos 
        
       
         ⁡ 
        
       
         θ 
        
       
         , 
        
       
         s 
        
       
         = 
        
       
         sin 
        
       
         ⁡ 
        
       
         θ 
        
       
      
        c=\cos\theta, s=\sin\theta
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.4306em;">
         </span>
         <span class="mord mathnormal">
          c
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
         <span class="mrel">
          =
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
        </span>
        <span class="base">
         <span class="strut" style="height: 0.8889em; vertical-align: -0.1944em;">
         </span>
         <span class="mop">
          cos
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord mathnormal" style="margin-right: 0.0278em;">
          θ
         </span>
         <span class="mpunct">
          ,
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord mathnormal">
          s
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
         <span class="mrel">
          =
         </span>
         <span class="mspace" style="margin-right: 0.2778em;">
         </span>
        </span>
        <span class="base">
         <span class="strut" style="height: 0.6944em;">
         </span>
         <span class="mop">
          sin
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord mathnormal" style="margin-right: 0.0278em;">
          θ
         </span>
        </span>
       </span>
      </span>
     </span>
     ，则直线与四个边框的交点分别为
    </p>
    <p>
     <span class="katex--display">
      <span class="katex-display">
       <span class="katex">
        <span class="katex-mathml">
         ( 
             
            
              0 
             
            
              , 
             
             
             
               ρ 
              
             
               s 
              
             
            
              ) 
             
            
           
          
          
           
            
            
              ( 
             
            
              n 
             
            
              , 
             
             
              
              
                ρ 
               
              
                − 
               
              
                n 
               
              
                c 
               
              
             
               s 
              
             
            
              ) 
             
            
           
          
         
         
          
           
            
            
              ( 
             
             
             
               ρ 
              
             
               c 
              
             
            
              , 
             
            
              0 
             
            
              ) 
             
            
           
          
          
           
            
            
              ( 
             
             
              
              
                ρ 
               
              
                − 
               
              
                m 
               
              
                s 
               
              
             
               c 
              
             
            
              , 
             
            
              m 
             
            
              ) 
             
            
           
          
         
        
       
         \begin{matrix} (0, \frac{\rho}{s})&amp;(n, \frac{\rho-nc}{s})\\ (\frac{\rho}{c}, 0)&amp;(\frac{\rho-ms}{c}, m)\\ \end{matrix}
        </span>
        <span class="katex-html">
         <span class="base">
          <span class="strut" style="height: 2.4289em; vertical-align: -0.9644em;">
          </span>
          <span class="mord">
           <span class="mtable">
            <span class="col-align-c">
             <span class="vlist-t vlist-t2">
              <span class="vlist-r">
               <span class="vlist" style="height: 1.4644em;">
                <span class="" style="top: -3.61em;">
                 <span class="pstrut" style="height: 3em;">
                 </span>
                 <span class="mord">
                  <span class="mopen">
                   (
                  </span>
                  <span class="mord">
                   0
                  </span>
                  <span class="mpunct">
                   ,
                  </span>
                  <span class="mspace" style="margin-right: 0.1667em;">
                  </span>
                  <span class="mord">
                   <span class="mopen nulldelimiter">
                   </span>
                   <span class="mfrac">
                    <span class="vlist-t vlist-t2">
                     <span class="vlist-r">
                      <span class="vlist" style="height: 0.7475em;">
                       <span class="" style="top: -2.655em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="sizing reset-size6 size3 mtight">
                         <span class="mord mtight">
                          <span class="mord mathnormal mtight">
                           s
                          </span>
                         </span>
                        </span>
                       </span>
                       <span class="" style="top: -3.23em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="frac-line" style="border-bottom-width: 0.04em;">
                        </span>
                       </span>
                       <span class="" style="top: -3.4461em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="sizing reset-size6 size3 mtight">
                         <span class="mord mtight">
                          <span class="mord mathnormal mtight">
                           ρ
                          </span>
                         </span>
                        </span>
                       </span>
                      </span>
                      <span class="vlist-s">
                       ​
                      </span>
                     </span>
                     <span class="vlist-r">
                      <span class="vlist" style="height: 0.345em;">
                       <span class="">
                       </span>
                      </span>
                     </span>
                    </span>
                   </span>
                   <span class="mclose nulldelimiter">
                   </span>
                  </span>
                  <span class="mclose">
                   )
                  </span>
                 </span>
                </span>
                <span class="" style="top: -2.3956em;">
                 <span class="pstrut" style="height: 3em;">
                 </span>
                 <span class="mord">
                  <span class="mopen">
                   (
                  </span>
                  <span class="mord">
                   <span class="mopen nulldelimiter">
                   </span>
                   <span class="mfrac">
                    <span class="vlist-t vlist-t2">
                     <span class="vlist-r">
                      <span class="vlist" style="height: 0.7475em;">
                       <span class="" style="top: -2.655em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="sizing reset-size6 size3 mtight">
                         <span class="mord mtight">
                          <span class="mord mathnormal mtight">
                           c
                          </span>
                         </span>
                        </span>
                       </span>
                       <span class="" style="top: -3.23em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="frac-line" style="border-bottom-width: 0.04em;">
                        </span>
                       </span>
                       <span class="" style="top: -3.4461em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="sizing reset-size6 size3 mtight">
                         <span class="mord mtight">
                          <span class="mord mathnormal mtight">
                           ρ
                          </span>
                         </span>
                        </span>
                       </span>
                      </span>
                      <span class="vlist-s">
                       ​
                      </span>
                     </span>
                     <span class="vlist-r">
                      <span class="vlist" style="height: 0.345em;">
                       <span class="">
                       </span>
                      </span>
                     </span>
                    </span>
                   </span>
                   <span class="mclose nulldelimiter">
                   </span>
                  </span>
                  <span class="mpunct">
                   ,
                  </span>
                  <span class="mspace" style="margin-right: 0.1667em;">
                  </span>
                  <span class="mord">
                   0
                  </span>
                  <span class="mclose">
                   )
                  </span>
                 </span>
                </span>
               </span>
               <span class="vlist-s">
                ​
               </span>
              </span>
              <span class="vlist-r">
               <span class="vlist" style="height: 0.9644em;">
                <span class="">
                </span>
               </span>
              </span>
             </span>
            </span>
            <span class="arraycolsep" style="width: 0.5em;">
            </span>
            <span class="arraycolsep" style="width: 0.5em;">
            </span>
            <span class="col-align-c">
             <span class="vlist-t vlist-t2">
              <span class="vlist-r">
               <span class="vlist" style="height: 1.4644em;">
                <span class="" style="top: -3.61em;">
                 <span class="pstrut" style="height: 3em;">
                 </span>
                 <span class="mord">
                  <span class="mopen">
                   (
                  </span>
                  <span class="mord mathnormal">
                   n
                  </span>
                  <span class="mpunct">
                   ,
                  </span>
                  <span class="mspace" style="margin-right: 0.1667em;">
                  </span>
                  <span class="mord">
                   <span class="mopen nulldelimiter">
                   </span>
                   <span class="mfrac">
                    <span class="vlist-t vlist-t2">
                     <span class="vlist-r">
                      <span class="vlist" style="height: 0.8544em;">
                       <span class="" style="top: -2.655em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="sizing reset-size6 size3 mtight">
                         <span class="mord mtight">
                          <span class="mord mathnormal mtight">
                           s
                          </span>
                         </span>
                        </span>
                       </span>
                       <span class="" style="top: -3.23em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="frac-line" style="border-bottom-width: 0.04em;">
                        </span>
                       </span>
                       <span class="" style="top: -3.4461em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="sizing reset-size6 size3 mtight">
                         <span class="mord mtight">
                          <span class="mord mathnormal mtight">
                           ρ
                          </span>
                          <span class="mbin mtight">
                           −
                          </span>
                          <span class="mord mathnormal mtight">
                           n
                          </span>
                          <span class="mord mathnormal mtight">
                           c
                          </span>
                         </span>
                        </span>
                       </span>
                      </span>
                      <span class="vlist-s">
                       ​
                      </span>
                     </span>
                     <span class="vlist-r">
                      <span class="vlist" style="height: 0.345em;">
                       <span class="">
                       </span>
                      </span>
                     </span>
                    </span>
                   </span>
                   <span class="mclose nulldelimiter">
                   </span>
                  </span>
                  <span class="mclose">
                   )
                  </span>
                 </span>
                </span>
                <span class="" style="top: -2.3956em;">
                 <span class="pstrut" style="height: 3em;">
                 </span>
                 <span class="mord">
                  <span class="mopen">
                   (
                  </span>
                  <span class="mord">
                   <span class="mopen nulldelimiter">
                   </span>
                   <span class="mfrac">
                    <span class="vlist-t vlist-t2">
                     <span class="vlist-r">
                      <span class="vlist" style="height: 0.8544em;">
                       <span class="" style="top: -2.655em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="sizing reset-size6 size3 mtight">
                         <span class="mord mtight">
                          <span class="mord mathnormal mtight">
                           c
                          </span>
                         </span>
                        </span>
                       </span>
                       <span class="" style="top: -3.23em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="frac-line" style="border-bottom-width: 0.04em;">
                        </span>
                       </span>
                       <span class="" style="top: -3.4461em;">
                        <span class="pstrut" style="height: 3em;">
                        </span>
                        <span class="sizing reset-size6 size3 mtight">
                         <span class="mord mtight">
                          <span class="mord mathnormal mtight">
                           ρ
                          </span>
                          <span class="mbin mtight">
                           −
                          </span>
                          <span class="mord mathnormal mtight">
                           m
                          </span>
                          <span class="mord mathnormal mtight">
                           s
                          </span>
                         </span>
                        </span>
                       </span>
                      </span>
                      <span class="vlist-s">
                       ​
                      </span>
                     </span>
                     <span class="vlist-r">
                      <span class="vlist" style="height: 0.345em;">
                       <span class="">
                       </span>
                      </span>
                     </span>
                    </span>
                   </span>
                   <span class="mclose nulldelimiter">
                   </span>
                  </span>
                  <span class="mpunct">
                   ,
                  </span>
                  <span class="mspace" style="margin-right: 0.1667em;">
                  </span>
                  <span class="mord mathnormal">
                   m
                  </span>
                  <span class="mclose">
                   )
                  </span>
                 </span>
                </span>
               </span>
               <span class="vlist-s">
                ​
               </span>
              </span>
              <span class="vlist-r">
               <span class="vlist" style="height: 0.9644em;">
                <span class="">
                </span>
               </span>
              </span>
             </span>
            </span>
           </span>
          </span>
         </span>
        </span>
       </span>
      </span>
     </span>
    </p>
    <h3>
     <a id="_28">
     </a>
     实战
    </h3>
    <p>
     通过opencv中的直线检测函数，可得到如下检测结果。
    </p>
    <p>
     <img alt="在这里插入图片描述" src="https://i-blog.csdnimg.cn/blog_migrate/37b2280559eaa409e2686e72b1fd6ef7.png#pic_center"/>
    </p>
    <p>
     代码如下。
    </p>
    <pre><code class="prism language-python"><span class="token keyword">from</span> scipy<span class="token punctuation">.</span>misc <span class="token keyword">import</span> ascent
<span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">import</span> cv2 <span class="token keyword">as</span> cv
<span class="token keyword">from</span> matplotlib <span class="token keyword">import</span> pyplot <span class="token keyword">as</span> plt

img <span class="token operator">=</span> ascent<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>astype<span class="token punctuation">(</span>np<span class="token punctuation">.</span>uint8<span class="token punctuation">)</span>
m<span class="token punctuation">,</span> n <span class="token operator">=</span> img<span class="token punctuation">.</span>shape

edges <span class="token operator">=</span> cv<span class="token punctuation">.</span>Canny<span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">,</span> apertureSize <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">)</span>
lines <span class="token operator">=</span> cv<span class="token punctuation">.</span>HoughLines<span class="token punctuation">(</span>edges<span class="token punctuation">,</span><span class="token number">1.5</span><span class="token punctuation">,</span>np<span class="token punctuation">.</span>pi<span class="token operator">/</span><span class="token number">180</span><span class="token punctuation">,</span><span class="token number">200</span><span class="token punctuation">)</span>

fig<span class="token punctuation">,</span> ax <span class="token operator">=</span> plt<span class="token punctuation">.</span>subplots<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>

ax<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>imshow<span class="token punctuation">(</span>img<span class="token punctuation">,</span> cmap<span class="token operator">=</span><span class="token string">'gray'</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> line <span class="token keyword">in</span> lines<span class="token punctuation">:</span>
    rho<span class="token punctuation">,</span>theta <span class="token operator">=</span> line<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    c <span class="token operator">=</span> np<span class="token punctuation">.</span>cos<span class="token punctuation">(</span>theta<span class="token punctuation">)</span>
    s <span class="token operator">=</span> np<span class="token punctuation">.</span>sin<span class="token punctuation">(</span>theta<span class="token punctuation">)</span>
    xs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">,</span> rho<span class="token operator">/</span>c<span class="token punctuation">,</span> <span class="token punctuation">(</span>rho<span class="token operator">-</span>m<span class="token operator">*</span>s<span class="token punctuation">)</span><span class="token operator">/</span>c<span class="token punctuation">]</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>xs<span class="token punctuation">)</span>
    ys <span class="token operator">=</span> <span class="token punctuation">[</span>rho<span class="token operator">/</span>s<span class="token punctuation">,</span> <span class="token punctuation">(</span>rho<span class="token operator">-</span>n<span class="token operator">*</span>c<span class="token punctuation">)</span><span class="token operator">/</span>s<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> m<span class="token punctuation">]</span>
    i1<span class="token punctuation">,</span> i2 <span class="token operator">=</span> np<span class="token punctuation">.</span>argsort<span class="token punctuation">(</span>xs<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
    ax<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span>xs<span class="token punctuation">[</span>i1<span class="token punctuation">]</span><span class="token punctuation">,</span> xs<span class="token punctuation">[</span>i2<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>ys<span class="token punctuation">[</span>i1<span class="token punctuation">]</span><span class="token punctuation">,</span> ys<span class="token punctuation">[</span>i2<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ls<span class="token operator">=</span><span class="token string">'--'</span><span class="token punctuation">)</span>
    ax<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">[</span>xs<span class="token punctuation">[</span>i1<span class="token punctuation">]</span><span class="token punctuation">,</span> xs<span class="token punctuation">[</span>i2<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>ys<span class="token punctuation">[</span>i1<span class="token punctuation">]</span><span class="token punctuation">,</span> ys<span class="token punctuation">[</span>i2<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> ls<span class="token operator">=</span><span class="token string">'--'</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>grid<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre>
    <p>
     【HoughLines】就是opencv中的基于霍夫变换的直线检测函数，其输入的四个参数分别是待检测图像、以像素为单位的距离精度
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        p 
         
        
          r 
         
        
       
      
        p_r
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.625em; vertical-align: -0.1944em;">
         </span>
         <span class="mord">
          <span class="mord mathnormal">
           p
          </span>
          <span class="msupsub">
           <span class="vlist-t vlist-t2">
            <span class="vlist-r">
             <span class="vlist" style="height: 0.1514em;">
              <span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;">
               <span class="pstrut" style="height: 2.7em;">
               </span>
               <span class="sizing reset-size6 size3 mtight">
                <span class="mord mathnormal mtight" style="margin-right: 0.0278em;">
                 r
                </span>
               </span>
              </span>
             </span>
             <span class="vlist-s">
              ​
             </span>
            </span>
            <span class="vlist-r">
             <span class="vlist" style="height: 0.15em;">
              <span class="">
              </span>
             </span>
            </span>
           </span>
          </span>
         </span>
        </span>
       </span>
      </span>
     </span>
     、以弧度为单位的角度精度
     <span class="katex--inline">
      KaTeX parse error: Undefined control sequence: \tehta at position 3: p_\̲t̲e̲h̲t̲a̲
     </span>
     以及累加平面的阈值参数。
     <span class="katex--inline">
      <span class="katex">
       <span class="katex-mathml">
        p 
         
        
          r 
         
        
       
         , 
        
        
        
          p 
         
        
          θ 
         
        
       
      
        p_r, p_\theta
       </span>
       <span class="katex-html">
        <span class="base">
         <span class="strut" style="height: 0.625em; vertical-align: -0.1944em;">
         </span>
         <span class="mord">
          <span class="mord mathnormal">
           p
          </span>
          <span class="msupsub">
           <span class="vlist-t vlist-t2">
            <span class="vlist-r">
             <span class="vlist" style="height: 0.1514em;">
              <span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;">
               <span class="pstrut" style="height: 2.7em;">
               </span>
               <span class="sizing reset-size6 size3 mtight">
                <span class="mord mathnormal mtight" style="margin-right: 0.0278em;">
                 r
                </span>
               </span>
              </span>
             </span>
             <span class="vlist-s">
              ​
             </span>
            </span>
            <span class="vlist-r">
             <span class="vlist" style="height: 0.15em;">
              <span class="">
              </span>
             </span>
            </span>
           </span>
          </span>
         </span>
         <span class="mpunct">
          ,
         </span>
         <span class="mspace" style="margin-right: 0.1667em;">
         </span>
         <span class="mord">
          <span class="mord mathnormal">
           p
          </span>
          <span class="msupsub">
           <span class="vlist-t vlist-t2">
            <span class="vlist-r">
             <span class="vlist" style="height: 0.3361em;">
              <span class="" style="top: -2.55em; margin-left: 0em; margin-right: 0.05em;">
               <span class="pstrut" style="height: 2.7em;">
               </span>
               <span class="sizing reset-size6 size3 mtight">
                <span class="mord mathnormal mtight" style="margin-right: 0.0278em;">
                 θ
                </span>
               </span>
              </span>
             </span>
             <span class="vlist-s">
              ​
             </span>
            </span>
            <span class="vlist-r">
             <span class="vlist" style="height: 0.15em;">
              <span class="">
              </span>
             </span>
            </span>
           </span>
          </span>
         </span>
        </span>
       </span>
      </span>
     </span>
     这两个值设得越大，则会检查出越多的直线。
    </p>
   </div>
   <link href="../../assets/css/markdown_views-a5d25dd831.css" rel="stylesheet"/>
   <link href="../../assets/css/style-e504d6a974.css" rel="stylesheet"/>
  </div>
 </article>
</div>


