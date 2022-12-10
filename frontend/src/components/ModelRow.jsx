export function ModelRow(model) {
  return (
    <div>
      <div className="model-name">{model.obj.model_name}</div>
      <div>{model.obj.model_description}</div>
    </div>
  );
}

export default ModelRow;
