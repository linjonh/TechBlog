{{- $cacheEnabled := .Site.Params.pwa.cache.enabled -}}
{{- $json := dict "cacheName" (printf "hugo-blog-%s" (now.Format "20060102-150405")) -}}

{{- if $cacheEnabled -}}
  {{- $resources := slice  "/" }}
  {{- range .Site.Menus.main }}
    {{- $resources = append $resources (slice (.URL | relURL)) -}}
  {{- end }}
  {{- $static_file :=.Site.Params.pwa.cache.static_files -}}
  {{- if $static_file -}}
    {{- range $static_file }}
      {{- $resources = append $resources (slice (. | relURL)) -}}
    {{- end }}
  {{- end }}

  {{- $json = merge $json (dict "resources" $resources) -}}

  {{- $interceptorPaths := slice }}
  {{- range .Site.Params.pwa.cache.deny_paths }}
    {{- $interceptorPaths = append $interceptorPaths (slice ( . | relURL )) -}}
  {{- end }}

  {{- $json = merge $json (dict "interceptor" (dict "paths" $interceptorPaths "urlPrefixes" (slice))) -}}
  {{- $json = merge $json (dict "purge" false) -}}
{{- else -}}
  {{- $json = merge $json (dict "purge" true) -}}
{{- end -}}

const swconf={{- $json | jsonify  -}};