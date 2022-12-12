# allennlp_ru
Репозиторий AllenNLP Demo (demo.allennlp.org), но на русском языке и с моделями для русского языка.

![alt text](https://github.com/gleb-skobinsky/allennlp_ru/blob/master/qa_model_example.png?raw=true)


Команды для клонирования репозитория и устновки зависимостей (предполагается, что установлены python версии 3.8 или выше, npm версии 14.2 или выше):

```
git clone https://github.com/gleb-skobinsky/allennlp_ru.git
python3 -m venv ruallen_venv
source ruallenv_venv/bin/activate
cd allennlp_ru/backend
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Документация API (на FastAPI) запускается на localhoost:8000/docs

Команды для запуска фронтенд-приложения (React):

```
cd allennlp_ru/frontend
nvm use 14
npm install 
npm start
```

Фронтенд доступен на localhost:3000

Команды для скачивания моделей:

1) Reading comprehension - TransformerQA:

```
cd allennlp_ru/frontend
gdown https://drive.google.com/uc?id=1eYvUOVnKd-0lwWRyt0zFQ0SeCTEXBvUr --output model_zoo/model_rc.tar.gz
```
