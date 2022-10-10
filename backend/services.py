import fastapi as _fastapi
import fastapi.security as _security
import jwt as _jwt
import datetime as _dt
import sqlalchemy.orm as _orm
import passlib.hash as _hash

import database as _database
import models as _models
import schemas as _schemas

oauth2schema = _security.OAuth2PasswordBearer(tokenUrl="/api/token")

JWT_SECRET = "myjwtsecret"


def create_database():
    return _database.Base.metadata.create_all(bind=_database.engine)


def get_db():
    db = _database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def get_task_by_name(name: str, db: _orm.Session):
    return db.query(_models.Task).filter(_models.Task.name == name).first()


async def create_task(task: _schemas.TaskCreate, db: _orm.Session):
    task_obj = _models.Task(
        name=task.name, description=task.description
    )
    db.add(task_obj)
    db.commit()
    db.refresh(task_obj)
    return task_obj


async def delete_task(task_id: int, db: _orm.Session):
    task_obj = db.get(_models.Task, task_id)
    if not task_obj:
        raise _fastapi.HTTPException(status_code=404, detail="Task not found")
    db.delete(task_obj)
    db.commit()
    return {"ok": True}


def get_task(task_id: int, db: _orm.Session):
    task = db.get(_models.Task, task_id)
    return _schemas.Task.from_orm(task)


async def get_all_tasks(db: _orm.Session):
    tasks = db.query(_models.Task)
    return list(map(_schemas.Task.from_orm, tasks))


async def update_task(task_id: int, task: _schemas.TaskCreate, db: _orm.Session):
    task_db = db.get(_models.Task, task_id)
    task_db.name = task.name
    task_db.description = task.description
    db.commit()
    db.refresh(task_db)
    return _schemas.Task.from_orm(task_db)
