<!DOCTYPE html>
<html lang="{{ page.lang | default: site.lang | default: "en" }}">
{% include head.inc %}
<body id="homepage" class="page-default {% if page.layout %}page-{{ page.layout }}{% endif %} {% if page.category %} category-{{ page.category }}{% endif %}{% if page.classname %} post-{{ page.classname }}{% endif %} {{ page.title | downcase | replace:' ','-' | replace:',','' | strip_html }}">
    {{ content }}
    {% include footer_scripts.inc %}
</body>
</html>
