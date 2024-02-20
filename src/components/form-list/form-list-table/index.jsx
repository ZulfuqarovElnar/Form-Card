import { Box, Button, Paper, Table } from '@mui/material'
import React from 'react'

export default function FormListTable() {
  return (
    <Box className="TableContainer">
        Siyahı
        <Paper
            variant="outlined"
            className="Table"
        >
            <Table
            borderAxis="bothBetween"
            stripe="odd"
            hoverRow
            >
            <thead>
                <tr>
                <th>Məzmun undefined</th>
                <th>Əməliyyat tarixi undefined</th>
                <th>Şirkət undefined</th>
                <th>Filial undefined	</th>
                <th>Dəyiş undefined</th>
                <th>Sil undefined</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>2334 N-li alış sənədi</td>
                    <td>02.02.2024</td>
                    <td>Tac MMC</td>
                    <td></td>
                    <td>
                        <Button size="sm">
                            Dəyiş
                        </Button>
                    </td>
                    <td>
                        <Button size="sm" >
                            Sil
                        </Button>
                    </td>
                </tr>
            </tbody>
            </Table>
        </Paper>
    </Box>
  )
}
