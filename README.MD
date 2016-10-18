# alep-ng2-table

## Installation

To install this Angular2 component, run:

```bash
$ npm install alep-ng2-table --save
```

## Dependencies

The styling of the paginator depends on bootstrap 3.3.7

## Usage

Inputs:

- **tableInput: TableInput** (required) = object defined in dist/models/table-input-classes.d.ts, with the following properties:
	-	**headers: Array<HeaderEntry\>** = array of HeaderEntry objects, also defined in dist/models/table-input-classes.d.ts, having the following properties:
		-	**headerLabel: string** = string containing the label desired for the header
		-	**propName: string** = string containing the name of the property corresponding to the header (example: if you want the table to show produt.price then propName = 'price')
	-	**items: Array<any\>** = array of objects of any type (but all of the same type) to be displayed in the table
	-	**itemsPerPage: number** = number of items to be displayed in each page of the table
	-	**totClickablePages: number** = number of pages available to be clicked in the table's paginator (if n is given, then the paginator will show the buttons for pages from 1 to n. When the button ">>" is clicked, then the paginator will show pages from n+1 to n+n and so on...)




## Development

Source code can be found at:

https://github.com/alessioprestileo/alep-ng2-table.git

## License

MIT © [Alessio Prestileo](alessioprestileo@gmail.com)
