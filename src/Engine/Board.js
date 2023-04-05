class board {
	constructor(size) {
		//board's background color
		this.bGColor = 'var(--FSBlue)';
		//board size: n x n.
		this.size = size;
		//create the board through table html tags
		this.createBoard(size);
	}
	getSize() {
		return this.size;
	}

	//create board in html with n x n dimension.  should only accept/expect n of 15 or 19.
	createBoard(size) {

		//initialize table element
		let tbl = document.createElement('table');
		tbl.id = "board";
		tbl.className = 'board';
		tbl.style.display = 'inline-table';

		//smaller tiles for larger dimension
		let tdSize = (size == 15) ? 5.0 : 4.0;
		let tdFontSize = (size == 15) ? 200 : 150;

		//fill table with nxn rows and columns
		for (let i = 0; i < size; i++) {

			//create table row element
			let r = document.createElement('tr');

			//assign class to table row element
			r.className = 'row' + i;

			//add cells of each column
			for (let j = 0; j < size; j++) {

				//create td element
				let td = document.createElement('td');
				//assign class: col{j}
				td.className = 'col' + j;
				//assign id: '{i}-{j}'
				td.id = i + '-' + j;
				//assign onclick function
				td.onclick = function () { clicked(i, j) };
				td.style.height = tdSize + 'vh';
				td.style.width = tdSize + 'vw';
				td.style.fontSize = tdFontSize + '%';

				//create div element (vertical class)
				let divV = document.createElement('div');
				divV.className = 'vertical';

				//create div element (horizontalclass)
				let divH = document.createElement('div');
				divH.className = 'horizontal';

				//append divs to td 
				td.appendChild(divV);
				td.appendChild(divH);

				//append td to tr
				r.appendChild(td);

			}

			//rename last column cell's class to assist css
			r.lastChild.className = 'colLast';
			r.lastChild.id = i + '-' + (size - 1);
			r.lastChild.onclick = function () { clicked(i, size - 1); };

			//append completed row
			tbl.appendChild(r);
		}

		//rename last row's class to assist css
		tbl.lastChild.className = 'rowLast';

		//append finished child before p2status table
		let p2StatusTbl = document.getElementById('p2StatusTbl');
		document.body.insertBefore(tbl, p2StatusTbl);
	}

	colorChange(color) {
		this.bBGColor = color;
		document.getElementById("board").style.backgroundColor = color;
	}

	bGImgChange() {
		let brd = document.getElementById('board');
		if (brd.style.backgroundImage != '') {
			brd.style.backgroundImage = '';
		}
		else {
			document.getElementById('board').style.backgroundImage = "url('../assets/FresnoStateBulldog.png')";
		}
	}
}