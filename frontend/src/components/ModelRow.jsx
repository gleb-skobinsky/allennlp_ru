import React, { useEffect, useState } from "react";

export function ModelRow(model) {
  console.log(model.obj);
  return (
    <div>
      <div className="model-name">{model.obj.model_name}</div>
      <div>{model.obj.model_description}</div>
    </div>
  );
}

export default ModelRow;
