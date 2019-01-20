import React from 'react';
//import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';
import cloneDeep from 'lodash/cloneDeep';
//import findIndex from 'lodash/findIndex';
import * as Table from 'reactabular-table';
import * as dnd from 'reactabular-dnd';
import * as resolve from 'table-resolver';

import sample from "./images/sample-letter.png";
import sample2 from "./images/sample-letter2.png";
import sample3 from "./images/sample-letter3.png";

import './DragAndDropTable.css';
 
const rows = [
  {
    id: 1,
    letter: "Letter 1",
    manuscript1: <img src={sample} alt={"sample letter"} />, 
    manuscript2: <img src={sample2} alt={"sample letter2"} />, 
    manuscript3: <img src={sample3} alt={"sample letter3"} />
  },
  {
    id: 2,
    letter: "Letter 2",
    manuscript1: <img src={sample} alt={"sample letter"} />, 
    manuscript2: <img src={sample2} alt={"sample letter2"} />, 
    manuscript3: <img src={sample3} alt={"sample letter3"} />
  },
  {
    id: 3,
    letter: "Letter 3",
    manuscript1: <img src={sample} alt={"sample letter"} />, 
    manuscript2: <img src={sample2} alt={"sample letter2"} />, 
    manuscript3: <img src={sample3} alt={"sample letter3"} />
  },
];
 
class DragAndDropTable extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      columns: [
        {
          property: 'letter',
          props: {
            label: 'Letter',
            style: {
              width: 200,
              fontWeight: "bold"
            }
          },
          header: {
            label: 'Scriptchart',
            props: {
              onMove: o => this.onMoveColumn(o)
            }
          }
        },
        {
          property: 'manuscript1',
          props: {
            label: 'Manuscript A',
            style: {
              width: 200
            }
          },
          header: {
            label: 'Manuscript A',
            props: {
              onMove: o => this.onMoveColumn(o)
            }
          }
        },
        {
          property: 'manuscript2',
          props: {
            style: {
              width: 200
            }
          },
          header: {
            label: 'Manuscript B',
            props: {
              label: 'Manuscript B',
              onMove: o => this.onMoveColumn(o)
            }
          }
        },
        {
          property: 'manuscript3',
          props: {
            style: {
              width: 200
            }
          },
          header: {
            label: 'Manuscript C',
            props: {
              label: 'Manuscript C',
              onMove: o => this.onMoveColumn(o)
            }
          }
        }
      ],
      rows
    };
 
    this.onRow = this.onRow.bind(this);
    this.onMoveRow = this.onMoveRow.bind(this);
    this.onMoveColumn = this.onMoveColumn.bind(this);
    this.onMoveChildColumn = this.onMoveChildColumn.bind(this);
  }
  render() {
    const renderers = {
      header: {
        cell: dnd.Header
      },
      body: {
        row: dnd.Row
      }
    };
    const { columns, rows } = this.state;
    const resolvedColumns = resolve.columnChildren({ columns });
    const resolvedRows = resolve.resolve({
      columns: resolvedColumns,
      method: resolve.nested
    })(rows);
 
    return (
      <Table.Provider
        renderers={renderers}
        columns={resolvedColumns}
      >
        <Table.Header
          headerRows={resolve.headerRows({ columns })}
        />
 
        <Table.Body
          rows={resolvedRows}
          rowKey="id"
          onRow={this.onRow}
        />
      </Table.Provider>
    );
  }
  onRow(row) {
    return {
      rowId: row.id,
      onMove: this.onMoveRow
    };
  }
  onMoveRow({ sourceRowId, targetRowId }) {
    const rows = dnd.moveRows({
      sourceRowId,
      targetRowId
    })(this.state.rows);
 
    if (rows) {
      this.setState({ rows });
    }
  }
  onMoveColumn(labels) {
    const movedColumns = dnd.moveLabels(this.state.columns, labels);
 
    if (movedColumns) {
      // Retain widths to avoid flashing while drag and dropping.
      const source = movedColumns.source;
      const target = movedColumns.target;
      const sourceWidth = source.props.style && source.props.style.width;
      const targetWidth = target.props.style && target.props.style.width;
 
      source.props.style = {
        ...source.props.style,
        width: targetWidth
      };
      target.props.style = {
        ...target.props.style,
        width: sourceWidth
      };
 
      this.setState({
        columns: movedColumns.columns
      });
    }
  }
  onMoveChildColumn(labels) {
    const movedChildren = dnd.moveChildrenLabels(this.state.columns, labels);
 
    if (movedChildren) {
      const columns = cloneDeep(this.state.columns);
 
      columns[movedChildren.target].children = movedChildren.columns;
 
      // Here we assume children have the same width.
      this.setState({ columns });
    }
  }
}
 
// Set up drag and drop context
//const DragAndDrop = DragDropContext(HTML5Backend)(DragAndDropTable);
//<DragAndDropTable />

export default DragAndDropTable;


