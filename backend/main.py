from typing import List
from urllib import response
import fastapi as _fastapi
import fastapi.security as _security

import sqlalchemy.orm as _orm

import services as _services
import schemas as _schemas

app = _fastapi.FastAPI()


@app.get("/api/tasks-by-id/{task_id}", response_model=_schemas.Task, status_code=200)
async def read_task(task_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.get_task(task_id, db)


@app.get("/api/tasks-by-name/{task_name}", response_model=_schemas.Task, status_code=200)
async def read_task_by_name(task_name: str, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.get_task_by_name(task_name, db)


@app.get("/api/tasks", response_model=List[_schemas.Task])
async def all_tasks(db: _orm.Session = _fastapi.Depends(_services.get_db)):
    return await _services.get_all_tasks(db)


@app.post("/api/tasks")
async def create_task(
    task: _schemas.TaskCreate, db: _orm.Session = _fastapi.Depends(_services.get_db)
):
    db_task = await _services.get_task_by_name(task.name, db)
    if db_task:
        raise _fastapi.HTTPException(
            status_code=400, detail="Задача с таким названием уже существует")

    return await _services.create_task(task, db)


@app.put("/api/tasks/{id}")
async def update_task(
    task_id: int, task: _schemas.TaskCreate, db: _orm.Session = _fastapi.Depends(_services.get_db)
):
    await _services.update_task(task_id, task, db)
    return {"message", "Successfully Updated"}


@app.delete('/api/tasks/{task_id}', response_model=_schemas.Task, status_code=200)
async def delete_task(task_id: int, db: _orm.Session = _fastapi.Depends(_services.get_db)):
    await _services.update_task(task_id, db)
    return await _services.delete_task(task_id, db)
