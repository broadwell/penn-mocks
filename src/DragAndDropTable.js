import React from 'react';
//import { DragDropContext } from 'react-dnd';
//import HTML5Backend from 'react-dnd-html5-backend';
import cloneDeep from 'lodash/cloneDeep';
//import findIndex from 'lodash/findIndex';
import * as Table from 'reactabular-table';
import * as dnd from 'reactabular-dnd';
import * as resolve from 'table-resolver';

import eastern_alap from "./images/Syriac_Eastern_alap.png"
import eastern_bet from "./images/Syriac_Eastern_bet.png"
import eastern_gamal from "./images/Syriac_Eastern_gamal.png"
import eastern_dalat from "./images/Syriac_Eastern_dalat.png"
import eastern_he from "./images/Syriac_Eastern_he.png"
import eastern_waw from "./images/Syriac_Eastern_waw.png"
import estrangela_alap from "./images/Syriac_Estrangela_alap.png"
import estrangela_bet from "./images/Syriac_Estrangela_bet.png"
import estrangela_gamal from "./images/Syriac_Estrangela_gamal.png"
import estrangela_dalat from "./images/Syriac_Estrangela_dalat.png"
import estrangela_he from "./images/Syriac_Estrangela_he.png"
import estrangela_waw from "./images/Syriac_Estrangela_waw.png"
import serta_alap from "./images/Syriac_Serta_alap.png"
import serta_bet from "./images/Syriac_Serta_bet.png"
import serta_gamal from "./images/Syriac_Serta_gamal.png"
import serta_dalat from "./images/Syriac_Serta_dalat.png"
import serta_he from "./images/Syriac_Serta_he.png"
import serta_waw from "./images/Syriac_Serta_waw.png"

//import sample from "./images/sample-letter.png";
//import sample2 from "./images/sample-letter2.png";
//import sample3 from "./images/sample-letter3.png";

import './DragAndDropTable.css';
 
const rows = [
  {
    id: 1,
    letter: "ʾĀlep̄",
    manuscript1: <img src={eastern_alap} alt={"sample letter"} />, 
    manuscript2: <img src={estrangela_alap} alt={"sample letter2"} />, 
    manuscript3: <img src={serta_alap} alt={"sample letter3"} />,
    manuscript4: <img src={eastern_alap} alt={"sample letter"} />, 
    manuscript5: <img src={estrangela_alap} alt={"sample letter2"} />, 
    manuscript6: <img src={serta_alap} alt={"sample letter3"} />
  },
  {
    id: 2,
    letter: "Bēṯ",
    manuscript1: <img src={eastern_bet} alt={"sample letter"} />, 
    manuscript2: <img src={estrangela_bet} alt={"sample letter2"} />, 
    manuscript3: <img src={serta_bet} alt={"sample letter3"} />,
    manuscript4: <img src={eastern_bet} alt={"sample letter"} />, 
    manuscript5: <img src={estrangela_bet} alt={"sample letter2"} />, 
    manuscript6: <img src={serta_bet} alt={"sample letter3"} />
  },
  {
    id: 3,
    letter: "Gāmal",
    manuscript1: <img src={eastern_gamal} alt={"sample letter"} />, 
    manuscript2: <img src={estrangela_gamal} alt={"sample letter2"} />, 
    manuscript3: <img src={serta_gamal} alt={"sample letter3"} />,
    manuscript4: <img src={eastern_gamal} alt={"sample letter"} />, 
    manuscript5: <img src={estrangela_gamal} alt={"sample letter2"} />, 
    manuscript6: <img src={serta_gamal} alt={"sample letter3"} />
  },
  {
    id: 4,
    letter: "Dālaṯ",
    manuscript1: <img src={eastern_dalat} alt={"sample letter"} />, 
    manuscript2: <img src={estrangela_dalat} alt={"sample letter2"} />, 
    manuscript3: <img src={serta_dalat} alt={"sample letter3"} />,
    manuscript4: <img src={eastern_dalat} alt={"sample letter"} />, 
    manuscript5: <img src={estrangela_dalat} alt={"sample letter2"} />, 
    manuscript6: <img src={serta_dalat} alt={"sample letter3"} />
  },
  {
    id: 5,
    letter: "Hē",
    manuscript1: <img src={eastern_he} alt={"sample letter"} />, 
    manuscript2: <img src={estrangela_he} alt={"sample letter2"} />, 
    manuscript3: <img src={serta_he} alt={"sample letter3"} />,
    manuscript4: <img src={eastern_he} alt={"sample letter"} />, 
    manuscript5: <img src={estrangela_he} alt={"sample letter2"} />, 
    manuscript6: <img src={serta_he} alt={"sample letter3"} />
  },
  {
    id: 6,
    letter: "Waw",
    manuscript1: <img src={eastern_waw} alt={"sample letter"} />, 
    manuscript2: <img src={estrangela_waw} alt={"sample letter2"} />, 
    manuscript3: <img src={serta_waw} alt={"sample letter3"} />,
    manuscript4: <img src={eastern_waw} alt={"sample letter"} />, 
    manuscript5: <img src={estrangela_waw} alt={"sample letter2"} />, 
    manuscript6: <img src={serta_waw} alt={"sample letter3"} />
  }
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
              width: 140,
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
              width: 140
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
              width: 140
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
              width: 140
            }
          },
          header: {
            label: 'Manuscript C',
            props: {
              label: 'Manuscript C',
              onMove: o => this.onMoveColumn(o)
            }
          }
        },
        {
          property: 'manuscript4',
          props: {
            style: {
              width: 140
            }
          },
          header: {
            label: 'Manuscript D', 
            props: {
              label: 'Manuscript D',
              onMove: o => this.onMoveColumn(o)
            }
          }
        },
        {
          property: 'manuscript5',
          props: {
            style: {
              width: 140
            }
          },
          header: {
            label: 'Manuscript E',
            props: {
              label: 'Manuscript E',
              onMove: o => this.onMoveColumn(o)
            }
          }
        },
        {
          property: 'manuscript6',
          props: {
            style: {
              width: 140
            }
          },
          header: {
            label: 'Manuscript F',
            props: {
              label: 'Manuscript F',
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