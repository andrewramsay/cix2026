---
title: Registration
layout: page
---
---
## Student applications

For students wishing to attend the summer school, you can now submit your applications by email. 

Please send the following details to **cix2026@glasgow.ac.uk**:

 * Name
 * Contact email (if different from sending address)
 * Institution/organization
 * A max ~1 page research statement covering your research interests and why attending the summer school would help your research
 * A copy of your CV 

## Key dates

Click [here]({{ site.conference.calendar_file }}) to download an iCal file containing this information.

<table class="regtablestyle">
    <thead>
        <tr>
            <th style="text-align: center">Event</th>
            <th>Date(s)</th>
        </tr>
    </thead>
    <tbody>
        {% for event in site.data.calendar %}
            {% assign start_dt = event.start %}
            {% assign end_dt = event.end %}
            {% assign start = event.start | date: "%A %-d %B %Y" %}
            <tr>
                <td style="text-align: center">{{ event.title | remove_first: "S³CIX 2026: " }}</td>
                <td><strong>{{ start }}</strong></td>
            </tr>
        {% endfor %}
    </tbody>
</table><br/>

## Registration process

Registration is yet to open, but will be done through EventBrite.

## Pricing

(prices still subject to change. Accomodation should be booked separately. We anticipate being able to supply lunches.)

| Registration type | Price |
| :---: | --- | --- |
|Student (no accommodation) | **£350** |
|Academic/postdoc | **£400** |
|Industry | **£500** |
|Late registration (student) | **£375** |
|Late registration (academic) | **£425** |
{:.regtablestyle}
