require 'time'

module Jekyll
  class IcalGenerator < Generator
    safe true

    def generate(site)
      events = site.data['calendar'] || []
      ics_content = generate_ics(events)
      site.pages << IcalPage.new(site, ics_content)
    end

    private

    def generate_ics(events)
      lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//S³CIX 2026//EN"
      ]

      events.each do |event|
        lines << "BEGIN:VEVENT"
        lines << "SUMMARY:#{event['title']}"

        description = event['description'] || event['title']
        lines << "DESCRIPTION:#{description}"

        lines << "LOCATION:#{event['location']}" if event['location']

        if event['all_day']
          lines << "DTSTART;VALUE=DATE:#{event['start'].gsub('-', '')}"
          lines << "DTEND;VALUE=DATE:#{event['end'].gsub('-', '')}"
        else
          tzid = event['timezone'] || "UTC"
          start_time = Time.parse(event['start'])
          end_time = Time.parse(event['end'])

          lines << "DTSTART;TZID=#{tzid}:#{start_time.strftime('%Y%m%dT%H%M%S')}"
          lines << "DTEND;TZID=#{tzid}:#{end_time.strftime('%Y%m%dT%H%M%S')}"
        end

        lines << "END:VEVENT"
      end

      lines << "END:VCALENDAR"
      lines.join("\r\n") + "\r\n"
    end

    def format_datetime(datetime_str)
      Time.parse(datetime_str).utc.strftime("%Y%m%dT%H%M%SZ")
    end
  end

  class IcalPage < Page
    def initialize(site, content)
      @site = site
      @base = "foo" #site.source
      @dir = ""
      @name = "conference.ics"

      self.process(@name)
      self.content = content
      self.data = {
        "content_type" => "text/calendar",
        "layout" => nil
      }
    end

    def render(layouts, site_payload)
      content
    end

    def url_placeholders
      {
        :path => "",
        :basename => "s3cix2026",
        :output_ext => ".ics"
      }
    end
  end
end

