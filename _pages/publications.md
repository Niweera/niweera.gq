---
layout: page
permalink: /publications/
title: Publications
description: See updated list on <a href="https://scholar.google.com/citations?user=O8A5FNwAAAAJ&hl=en">Google Scholar</a>.
years: [2020, 2021, 2022]
categories: ['Conferences', 'Posters', 'Journals']
catprint: ['','Conferences', 'Posters', 'Journals']
nav: true
---

<div class="publications">

{% for cat_ in page.categories  %}
	{% assign ind = forloop.index %}

	{%- capture cat -%}
	{{ page.catprint[ind] }}
	{%- endcapture -%}
	
	<h4 class="font-weight-bolder">{{cat}}</h4>
	{% for y in page.years reversed  %}
		{%- capture citecount -%}
		{% bibliography_count -f papers -q @*[kind={{cat_}} && year={{y}}]* %}
		{%- endcapture -%}

		{% if citecount != "0"  %}
			<h2 class="year">{{y}}</h2>
			{% bibliography -f papers -q @*[kind={{cat_}} && year={{y}}]* %}
		{% endif %}
	{% endfor %}
{% endfor %}

</div>
