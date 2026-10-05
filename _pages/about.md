---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "<https://cdn.jsdelivr.net/gh/>" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "<https://raw.githubusercontent.com/>" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am a PhD candidate at the University of Glasgow, supervised by Dr. Jianglin Lan, and currently a visiting researcher at the Robotics Institute, Carnegie Mellon University, hosted by Prof. Changliu Liu.
My research focuses on interactive embodied intelligence, including humanoid interaction, human motion generation, and interaction understanding, with broader interests in multi-agent interaction.

# News

{: .news-title}

- <time datetime="2026-10">Oct. 2026</time> Started my research visit at the [Robotics Institute, Carnegie Mellon University](https://www.ri.cmu.edu/), hosted by Prof. Changliu Liu.
- <time datetime="2026-02">Feb. 2026</time> Received the **Graduate School Mobility Scholarship** from the University of Glasgow.
- <time datetime="2025-12">Dec. 2025</time> Our collaborative work on [multi-agent coordination](https://dl.acm.org/doi/abs/10.65109/TAVV6081) was accepted to AAMAS 2026.
- <time datetime="2025-10">Oct. 2025</time> Our paper received the **Best Paper Award** at [ACM Multimedia (MM) 2025](https://acmmm2025.org/awards/).
- <time datetime="2025-09">Sep. 2025</time> Our work on [interaction dynamics for motion diffusion](https://neurips.cc/virtual/2025/loc/san-diego/poster/117147) was accepted to NeurIPS 2025.
{: .news-list}

# Publications

{: #publication .publications-title}

{% include_relative publication.md %}

# Education

{: .education-title}

{% include_relative education.md %}

# Experience

{: .experience-title}

{% include_relative experience.md %}

# Awards and Honors

{: .timeline-title}

<ul class="simple-list">
  <li class="simple-list-item">
    <time class="item-date" datetime="2026-02">Feb. 2026</time>
    <div class="item-content">
      <strong>Graduate School Mobility Scholarship</strong>
      <span>University of Glasgow · Research visit to Carnegie Mellon University</span>
    </div>
  </li>

  <li class="simple-list-item">
    <time class="item-date" datetime="2026-01">Jan. 2026</time>
    <div class="item-content">
      <strong>Broadening Participation Award</strong>
      <span>WACV 2026 · $1,500 travel support and registration fee waiver</span>
    </div>
  </li>

  <li class="simple-list-item">
    <time class="item-date" datetime="2025-10">Oct. 2025</time>
    <div class="item-content">
      <strong>Best Paper Award</strong>
      <span>ACM Multimedia (MM) 2025</span>
    </div>
  </li>

  <li class="simple-list-item">
    <time class="item-date" datetime="2024-10">Oct. 2024</time>
    <div class="item-content">
      <strong>PhD Scholarship</strong>
      <span>Full tuition waiver and stipend · CoSE/EPSRC</span>
    </div>
  </li>
</ul>

<!-- - Shanghai Zhangjiang Hi-Tech Scholarship, 2022.06 -->
<!-- - Huawei Scholarship, 2022.06 -->
<!-- - China Electronics Technology Group Corporation LES Scholarship, 2021.06 -->
<!-- - National Encouragement Scholarship, three years in a row, 2016-2018 -->
<!-- - Winner, Huawei ICT AI Algorithm Competition (2%), 2024.09 -->
<!-- - Winner, Zhuhai Wanshan International Intelligent Vessel Competition (IIVC) (2.5%), 2020.11 -->
<!-- - Second prize, National Postgraduate Mathematical Contest in Modeling, two years in a row, 2019-2020 -->
<!-- - Meritorious Winner in American International Mathematical Contest in Modeling (6.5%), 2018.02 -->
<!-- - Second Prize, National Graduate Student MCM, 2017.12 -->

<!-- <details> 
<summary>Honors</summary>
<pre>
- Outstanding Graduate of SEU, 2022.6
- Outstanding Student Cadre of SEU, 2021.9
- Outstanding Graduate of WUT, 2019.6
- May Fourth Youth Medal of WUT, 2018.5
</pre>
</details> -->

# Service and Teaching

{: .timeline-title}

<ul class="simple-list">
  <li class="simple-list-item">
    <span class="item-date">Autumn 2025</span>
    <div class="item-content"><strong>ENG2083 Introductory Programming 2</strong><span>Teaching assistant with Prof. David Flynn · UoG</span></div>
  </li>
  <li class="simple-list-item">
    <span class="item-date">Autumn 2025</span>
    <div class="item-content"><strong>ENG1026_9 Engineering Skills 1 Robotics & AI</strong><span>Teaching assistant with Dr. Euan Mcgookin · UoG</span></div>
  </li>
  <li class="simple-list-item">
    <span class="item-date">Spring 2025</span>
    <div class="item-content"><strong>ENG5220 Real Time Embedded Programming</strong><span>Teaching assistant with Prof. Bernd Porr · UoG</span></div>
  </li>
  <li class="simple-list-item">
    <span class="item-date">Spring 2022</span>
    <div class="item-content"><strong>Nonlinear System Analysis</strong><span>Teaching assistant with Prof. Changyin Sun and Teng Wang · SEU</span></div>
  </li>
</ul>
