---
title: Registration
layout: page
---

---

## Key dates

Click [here]({{ site.conference.calendar_file }}) to download an iCal file containing this information.

<table class="regtablestyle">
    <thead>
        <tr>
            <th>Event</th>
            <th>Date(s)</th>
        </tr>
    </thead>
    <tbody>
        {% for event in site.data.calendar %}
            {% assign start_dt = event.start %}
            {% assign end_dt = event.end %}
            {% assign start = event.start | date: "%A %-d %B %Y" %}
            <tr>
                <td>{{ event.title | remove_first: "S³CIX 2026: " }}</td>
                <td><strong>{{ start }}</strong></td>
            </tr>
        {% endfor %}
    </tbody>
</table><br/>

## Registration process

Registration is yet to open, but will be done through EventBrite.

## Pricing

(prices still subject to change)

| Registration type | Price |
| :---: | --- | --- |
|Student (no accommodation) | **£275** |
|Academic/postdoc | **£300** |
|Late registration (student) | **£325** |
|Late registration (academic) | **£350** |
{:.regtablestyle}
