<<<<<<< HEAD
import datetime as _dt
from datetime import date
import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import passlib.hash as _hash

import database as _database


def get_date_now():
    return date.today()


class Task(_database.Base):
    __tablename__ = "tasks"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    name = _sql.Column(_sql.String, unique=True, index=True)
    description = _sql.Column(_sql.String)

    examples = _orm.relationship("Example", back_populates="task")
    models = _orm.relationship("NLPModel", back_populates="task")


class Example(_database.Base):
    __tablename__ = "examples"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    task_id = _sql.Column(_sql.Integer, _sql.ForeignKey("tasks.id"))
    sentence = _sql.Column(_sql.String)
    document = _sql.Column(_sql.String)
    question = _sql.Column(_sql.String)

    task = _orm.relationship("Task", back_populates="examples")


class NLPModel(_database.Base):
    __tablename__ = "models"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    task_id = _sql.Column(_sql.Integer, _sql.ForeignKey("tasks.id"))
    model_name = _sql.Column(_sql.String)
    registered_name = _sql.Column(_sql.String)
    model_type = _sql.Column(_sql.String)
    model_description = _sql.Column(_sql.String)
    primary_uses = _sql.Column(_sql.String, nullable=True)
    last_update = _sql.Column(_sql.Date, default=get_date_now())
    version = _sql.Column(_sql.Float, nullable=True)
    relevant_task = _sql.Column(_sql.String)
    predictor_name = _sql.Column(_sql.String)
    performance_measure = _sql.Column(_sql.String)
    unitary_results = _sql.Column(_sql.String)
    evaluation_dataset = _sql.Column(_sql.String)
    training_dataset = _sql.Column(_sql.String)
    training_config = _sql.Column(_sql.String)
    task = _orm.relationship("Task", back_populates="models")
=======
import datetime as _dt

import sqlalchemy as _sql
import sqlalchemy.orm as _orm
import passlib.hash as _hash

import database as _database


class Task(_database.Base):
    __tablename__ = "tasks"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    name = _sql.Column(_sql.String, unique=True, index=True)
    description = _sql.Column(_sql.String)

    examples = _orm.relationship("Example", back_populates="task")


class Example(_database.Base):
    __tablename__ = "examples"
    id = _sql.Column(_sql.Integer, primary_key=True, index=True)
    task_id = _sql.Column(_sql.Integer, _sql.ForeignKey("tasks.id"))
    sentence = _sql.Column(_sql.String)
    document = _sql.Column(_sql.String)
    question = _sql.Column(_sql.String)

    task = _orm.relationship("Task", back_populates="examples")
>>>>>>> 68464d34031e25b641c5b2a3b97dbf6f387fb0ac
