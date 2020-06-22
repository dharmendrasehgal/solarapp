import React from 'react';
import Button from './button';


export default class Panel extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            isPanelActive: false
        };
    }
    handleEvent(e) {
        let tempTbl = e.currentTarget.parentNode.offsetParent,
            rowIndex = e.target.parentNode.parentNode.rowIndex,
            cellIndex = e.target.parentNode.cellIndex,
            colLength = e.target.parentNode.parentNode.cells.length,
            rowLength = e.target.parentNode.offsetParent.rows.length;
        (rowIndex === 0) && this.insertRow(tempTbl,colLength,0);
        (rowIndex === rowLength-1) && this.insertRow(tempTbl,colLength,tempTbl.rows.length);
        (cellIndex === 0) && this.insertCellsInAllRows(tempTbl,tempTbl.rows.length,1,0);
        (cellIndex === colLength-1) && this.insertCellsInAllRows(tempTbl,tempTbl.rows.length,1,colLength);
        return this.setState({isPanelActive: !this.state.isPanelActive});
    }
    insertRow(wrapper, colLength, rowIndex) {
        wrapper.insertRow(rowIndex);
        this.insertCells(wrapper, colLength, 0, rowIndex);
    }
    insertCells(wrapper, limit, colIndex, rowIndex) {
        for(let i = 0; i<limit;i++){
            let that = wrapper.rows[rowIndex].insertCell(colIndex);
            that.setAttribute('class','emptyCell');
            that.addEventListener("click", (e) => {
              //return this.handleEvent(e);
            });
        }
    }
    renderTemplate() {
        return (<Button props={this} />);
    }
    insertCellsInAllRows(wrapper, rowRange, colLength, colIndex) {
        for(let i = 0; i<rowRange;i++){
            this.insertCells(wrapper, colLength, colIndex, i);
        }
    }
    render() {
        return this.renderTemplate();
    }
}