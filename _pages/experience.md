{% comment %}
学术访问与工作经历分别配置，组内按时间倒序排列。
mark 是没有机构图片时显示的文字简称，并非机构 logo。
logo 路径已预设，将对应图片放入 images/experience 后重新构建即可显示。
文件名或扩展名不同时修改 logo 字段；图片不存在时继续显示简称。
{% endcomment %}
<div class="experience-groups">
  <section class="experience-group" aria-labelledby="academic-visits">
    <h2 id="academic-visits">Academic Visits</h2>
    <ul class="experience-list">
      {% include experience-row.html
        institution="Carnegie Mellon University"
        mark="CMU"
        logo="/images/experience/cmu.png"
        url="https://www.ri.cmu.edu/"
        dates="Oct. 2026 – Present"
        role="Visiting PhD Researcher"
        detail="Robotics Institute · Hosted by Prof. Changliu Liu"
        location="Pittsburgh, PA, USA"
      %}
      {% include experience-row.html
        institution="Technical University of Munich (TUM)"
        mark="TUM"
        logo="/images/experience/tum.png"
        url="https://www.asg.ed.tum.de/lfk/home/"
        dates="Jul. 2025 – Aug. 2025"
        role="Visiting PhD Researcher"
        detail="School of Engineering and Design · Hosted by Prof. Yu Feng"
        location="Munich, Germany"
      %}
    </ul>
  </section>
  <section class="experience-group" aria-labelledby="industry-experience">
    <h2 id="industry-experience">Industry Experience</h2>
    <ul class="experience-list">
      {% include experience-row.html
        institution="Huawei"
        mark="Huawei"
        logo="/images/experience/huawei.png"
        url="https://www.huawei.com/en/corporate-information"
        dates="Jun. 2022 – Sep. 2024"
        role="AI Engineer"
        type="Full-time"
        location="Nanjing, China"
      %}
      <!-- {% include experience-row.html
        institution="Arcsoft"
        mark="Arcsoft"
        logo="/images/experience/arcsoft.png"
        url="https://www.arcsoft.com/corporate/about.html"
        dates="Apr. 2021 – Jul. 2021"
        role="Image Algorithm"
        type="Internship"
        location="Nanjing, China"
      %}
      {% include experience-row.html
        institution="Sinovation Ventures · DeeCamp"
        mark="DeeCamp"
        logo="/images/experience/deecamp.png"
        url="https://www.sinovationventures.com/ai"
        dates="Jun. 2020 – Aug. 2020"
        role="3D Vision Algorithm"
        type="Internship"
        location="Virtual"
      %}
      {% include experience-row.html
        institution="Xiaomi"
        mark="Xiaomi"
        logo="/images/experience/xiaomi.png"
        url="https://www.mi.com/uk/about/"
        dates="Mar. 2019 – Jun. 2019"
        role="Software Engineer"
        type="Internship"
        location="Wuhan, China"
      %} -->
    </ul>
  </section>
</div>
