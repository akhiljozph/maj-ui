import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './ExpLanding.scss';

function createData(date: string, source: string, category: string, amount: number, action: string, remarks?: string) {
    return { date, source, category, amount, action, remarks };
}

const rows = [
    createData('01/07/2024', 'HDFC BANK', 'Food', 24, 'CREDIT'),
    createData('01/07/2024', 'HDFC BANK', 'Entertainment', 37, 'DEBIT'),
    createData('01/07/2024', 'Federal Bank', 'Fuel & Services', 24, 'CREDIT'),
    createData('01/07/2024', 'Millennia Credit Card', 'Others', 67, 'DEBIT'),
    createData('01/07/2024', 'Liquid Cash', 'Self Care', 49, 'CREDIT', 'Remarks'),
];

function ExpLanding() {
    return (
        <div className='exp-landing-container'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell align="center">Source</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Amount</TableCell>
                            <TableCell align="center">Action</TableCell>
                            <TableCell align="center">Remarks</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.date}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.date}
                                </TableCell>
                                <TableCell align="center">{row.source}</TableCell>
                                <TableCell align="center">{row.category}</TableCell>
                                <TableCell align="center">{row.amount}</TableCell>
                                <TableCell align="center">{row.action}</TableCell>
                                <TableCell align="center">{row.remarks}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )

}

export default ExpLanding;