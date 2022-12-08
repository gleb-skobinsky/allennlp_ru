<<<<<<< HEAD
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
    try:
        task = (
            db.query(_models.Task)
            .filter_by(name=name)
            .join(_models.NLPModel, isouter=True)
            .limit(1)
        )[0]
    except IndexError:
        raise _fastapi.HTTPException(status_code=404, detail="Task not found")
    return task


async def create_task(task: _schemas.TaskCreate, db: _orm.Session):
    task_obj = _models.Task(name=task.name, description=task.description)
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


async def get_task(task_id: int, db: _orm.Session):
    try:
        task = (
            db.query(_models.Task)
            .filter_by(id=task_id)
            .join(_models.NLPModel, isouter=True)
            .limit(1)
        )[0]
    except IndexError:
        raise _fastapi.HTTPException(status_code=404, detail="Task not found")
    return task


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


async def get_model_by_name(name: str, db: _orm.Session):
    model = db.query(_models.NLPModel).filter_by(model_name=name).first()
    return model


async def create_model(model: _schemas.ModelCreate, db: _orm.Session):
    model_obj = _models.NLPModel(
        task_id=model.task_id,
        model_name=model.model_name,
        registered_name=model.registered_name,
        model_type=model.model_type,
        model_description=model.model_description,
        primary_uses=model.primary_uses,
        last_update=model.last_update,
        version=model.version,
        relevant_task=model.relevant_task,
        predictor_name=model.predictor_name,
        performance_measure=model.performance_measure,
        unitary_results=model.unitary_results,
        evaluation_dataset=model.evaluation_dataset,
        training_dataset=model.training_dataset,
        training_config=model.training_config,
    )
    db.add(model_obj)
    db.commit()
    db.refresh(model_obj)
    return model_obj
=======
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
>>>>>>> 68464d34031e25b641c5b2a3b97dbf6f387fb0ac
