function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".atlassian.net")) {
    return "PROXY proxy.noones.tools:3128";
  } 
  if (dnsDomainIs(host, "myip.ru")) {
    return "PROXY proxy.noones.tools:3128";
  }  
  if (dnsDomainIs(host, ".atl-paas.net")) {
    return "PROXY proxy.noones.tools:3128";
  }  
  if (dnsDomainIs(host, ".atlassian.com")) {
    return "PROXY proxy.noones.tools:3128";
  }
  if (dnsDomainIs(host, "yandex.ru")) {
    return "PROXY proxy.noones.tools:3128";
  }
  return "DIRECT";
}