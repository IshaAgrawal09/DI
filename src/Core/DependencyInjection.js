import React from "react";
import * as _Services from "../Services/Request";

const DependencyInjection = (OriginalComp) => {
  console.log(_Services);
  const ComponentWrapper = function () {
    const di = {
      GET: _Services.GET(),
      POST: _Services.POST(),
      PUT: _Services.PUT(),
      DELETE: _Services.DELETE(),
    };
    return <OriginalComp di={di} />;
  };
  return ComponentWrapper;
};

export default DependencyInjection;
export { DependencyInjection as DI };
