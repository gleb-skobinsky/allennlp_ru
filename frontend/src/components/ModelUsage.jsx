export function ModelUsage() {
  return (
    <div>
      <h5 className="model-usage-install">УСТАНОВКА ALLENNLP</h5>
      <pre>pip install allennlp==2.1.0 allennlp-models==2.1.0</pre>
      <h5 className="model-usage-install">ПРЕДСКАЗАНИЕ МОДЕЛИ</h5>
      <pre>
        from allennlp.predictors.predictor import Predictor
        <br></br>
        import allennlp_models.rc predictor =
        Predictor.from_path("https://storage.googleapis.com/allennlp-public-models/bidaf-elmo.2021-02-11.tar.gz")
        <br></br>
        predictor.predict(passage="В Брюсселе 9 декабря правоохранительные
        органы в рамках расследования о коррупции задержали одну из 14
        вице-спикеров Европарламента, гречанку Еву Каили. Согласно заявлению
        бельгийской прокуратуры, следствие считает, что «одна из стран
        Персидского залива влияла на экономические и политические решения в
        Европарламенте, передавая большие денежные суммы и предлагая дорогие
        подарки лицам, имеющим значительные стратегические и/или политические
        позиции».", question="Кого задержали правоохранители в Брюсселе 9
        декабря?")
      </pre>
    </div>
  );
}

export default ModelUsage;
