{% assign d = site._modules | where:"slug", "links" | first %}
<div style="border: 1px solid #eee; margin: 10px; padding: 10px; background: #efd" >
<h3>{{ d.title }}</h3>
<p>{{ d.description }}</p>
<a href="{{ d.btn_test1.link }}" target="_blank"><button>{{ d.btn_test1.title }}</button></a>
<a href="{{ d.btn_test2.link }}" target="_blank"><button>{{ d.btn_test2.title }}</button></a>
</div>