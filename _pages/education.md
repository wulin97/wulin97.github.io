{% comment %}
教育经历配置：将 logo 放入 images/education，文件名与 logo 字段一致即可。
支持 PNG、JPG、SVG、WebP；更换文件名或扩展名时同步修改 logo 字段。
图片不存在时显示 mark 简称，添加图片后重新构建网站。
{% endcomment %}
<div class="education-groups">
  <ul class="experience-list">
    {% include experience-row.html
      heading="h2"
      institution="University of Glasgow (UoG)"
      mark="UoG"
      logo="/images/education/uog.png"
      url="https://www.gla.ac.uk/explore/awardsandrankings/"
      dates="Oct. 2024 – Present"
      role="Ph.D. Student · Electronics & Electrical Engineering"
      location="Glasgow, United Kingdom"
    %}
    {% include experience-row.html
      heading="h2"
      institution="Southeast University (SEU)"
      mark="SEU"
      logo="/images/education/seu.png"
      url="https://www.seu.edu.cn/english/22456/list.htm"
      dates="Sep. 2019 – Jun. 2022"
      role="M.E. · Control Engineering"
      detail="GPA: 3.77/4.0"
      location="Nanjing, China"
    %}
    {% include experience-row.html
      heading="h2"
      institution="Wuhan University of Technology (WUT)"
      mark="WUT"
      logo="/images/education/wut.png"
      url="http://english.whut.edu.cn/abo/"
      dates="Sep. 2015 – Jun. 2019"
      role="B.E. · Automation"
      detail="GPA: 3.90/4.0 · Rank: 5/220"
      location="Wuhan, China"
    %}
    {% include experience-row.html
      heading="h2"
      institution="Central China Normal University (CCNU)"
      mark="CCNU"
      logo="/images/education/ccnu.png"
      url="http://english.ccnu.edu.cn/About/About_CCNU.htm"
      dates="Feb. 2017 – Jun. 2019"
      role="B.A. · Chinese Language and Literature"
      location="Wuhan, China"
    %}
  </ul>
</div>
