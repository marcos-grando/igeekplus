from collections import OrderedDict
import json
# •
# diret = r"C:\iDev\Projetos\intensivo\public\teste.json"
# diret = r"C:\iDev\Projetos\intensivo\public\contents.json"

with open(diret, "r", encoding="utf-8") as file:
    data = json.load(file)

cloud_base = "https://res.cloudinary.com/marcos-grando/image/upload/project-intensivando/"

categ = ""

for n, item in enumerate(data):

    if item["tipo"] == "anime":
        categ = "Animes"
    elif item["tipo"] == "filme_animacao":
        categ = "Animações"
    elif item["tipo"] == "filme":
        categ = "Filmes"
    elif item["tipo"] == "serie":
        categ = "Séries"

    data[n] = {
        "id": item["id"],
        "thumb": cloud_base + f'{n+1}-card.jpg',
        "main": cloud_base + f'{n+1}-wpp.jpg',
        "categoria": categ,
        "title": item["title"],
        "tipo": item["tipo"],
        "genre": item["genre"],
        "desc": item["desc"],
        "text": item["text"],
        "nota": item["nota"],
        "release": item["release"]
    }


with open(diret, "w", encoding="utf-8") as file:
    json.dump(data, file, indent=4, ensure_ascii=False)

print("Caminhos atualizados com sucesso.")
