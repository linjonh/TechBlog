{{- $cacheEnabled := .Site.Params.pwa.cache.enabled -}}
{{- $cacheEnabled := .Site.Params.pwa.cache.enabled -}}
const swconf={
  {{- if $cacheEnabled }}
    cacheName: "{{ (printf "hugo-blog-%s" (now.Format "20060102-150405")) }}",
    {{- $resources := slice  -}} 
    {{- range .Site.Menus.main -}}
      {{- if not (in .URL "linjonh") -}}
      {{- $resources = append $resources (slice (.URL | relURL)) -}}
      {{- end -}}
    {{- end -}}
    {{- $static_file :=.Site.Params.pwa.cache.static_files -}}
    {{- if $static_file -}}
      {{- range $static_file -}}
        {{- $resources = append $resources (slice (. | relURL)) -}}
      {{- end -}}
    {{- end -}}
    {{- $interceptorPaths := slice -}}
    {{- range .Site.Params.pwa.cache.deny_paths -}}
      {{- $interceptorPaths = append $interceptorPaths (slice ( . | relURL )) -}}
    {{ end }}
    resources:{{- $resources | jsonify -}},
    interceptor: {
      paths:{{- $interceptorPaths | jsonify -}},
      urlPrefixes: [
        "https://www.google-analytics.com",
        "https://pagead2.googlesyndication.com",
        {{- if and .Site.Params.analytics.goatcounter.id (eq .Site.Params.pageviews.provider "goatcounter") -}}
          "https://{{ .Site.Params.analytics.goatcounter.id }}.goatcounter.com/counter/"
        {{- end -}}
      ],
      hostNames:[
        "doubleclick.net",
        "googlesyndication.com",
        "googleads.g.doubleclick.net",
      ]
    },
    purge: false
  {{- else -}}
    purge: true
  {{- end -}}
};
