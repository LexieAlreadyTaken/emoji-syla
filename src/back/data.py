import json
shengmu = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch','sh', 'r', 'z', 'c','s']
yunmu = ['a', 'o', 'e', 'i', 'u', 'yu', 'ai', 'ei', 'ui', 'ao', 'ou', 'ie', 'ue', 'ia', 'iao', 'ua', 'in', 'ing', 'un', 'iang', 'uang', 'an', 'en', 'ang', 'eng', 'ong', 'yun', 'iong']
shengmu = json.dumps(shengmu)
yunmu = json.dumps(yunmu)
dict = (shengmu, yunmu)