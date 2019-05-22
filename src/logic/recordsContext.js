import React from "react";

// Create Context
const RecordsContext = React.createContext();

// Create provider
class RecordsProvider extends React.Component {
  state = {
    records: []
  };

  clearAll = () => {
    this.setState({ records: [] });
  };

  addRecord = (name, description, type) => {
    const records = [...this.state.records];
    records.push({
      name,
      description,
      type,
      label: name,
      value: name
    });
    this.setState({ records });
  };

  deleteRecord = (name, description, type) => {
    const records = [...this.state.records];
    records.filter(r => {
      const matching = [
        !name || name === r.name,
        !description || description === r.description,
        !type || type === r.type
      ].every(b => b);
      return !matching;
    });
    this.setState({ records });
  };

  render() {
    return (
      <RecordsContext.Provider
        value={{
          records: this.state.records,
          addRecord: this.addRecord,
          deleteRecord: this.deleteRecord,
          clearAll: this.clearAll
        }}
      >
        {this.props.children}
      </RecordsContext.Provider>
    );
  }
}

// Create Consumer
const RecordsConsumer = C => props => (
  <RecordsContext.Consumer>
    {value => <C {...value} {...props} />}
  </RecordsContext.Consumer>
);

export { RecordsContext, RecordsProvider, RecordsConsumer };
