import React, { useEffect, useState } from "react";
class CurrentTask extends React.Component {
  render() {
    return (
      <div className="column">
        {this.props.task.currentTask ? (
          <div>{this.props.task.currentTask.name}</div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}
export default CurrentTask;
