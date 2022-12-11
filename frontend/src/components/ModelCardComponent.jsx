export function ModelCard(model) {
  function handleNull(text) {
    if (text != null) {
      return text;
    } else {
      return "Unknown";
    }
  }
  if (model.model != null) {
    return (
      <div className="column with-light-grey-border with-half-space">
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Название
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.model_name)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Зарегистрированное название
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.registered_name)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Тип модели
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.model_type)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Описание
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.model_description)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Применение
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.primary_uses)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Последнее обновление
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.last_update)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Версия
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.version)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Задача
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.relevant_task)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Название предиктора
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.predictor_name)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Показатель производительности модели
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.performance_measure)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Унитарные результаты
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.unitary_results)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Тестовый набор данных
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.evaluation_dataset)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Набор данных для обучения
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.training_dataset)}
          </div>
        </div>
        <div className="columns">
          <div className="column is-3 has-background-light with-light-grey-border">
            Конфиг обучения
          </div>
          <div className="column with-light-grey-border">
            {handleNull(model.model.training_config)}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModelCard;
