package com.chronos.br.domain;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Iterator;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;

public class Excel {

	private static final String fileName = "C:/Users/Aluno/Downloads/relatorio_infraestrutura.xls";

	public static void main(String[] args) throws IOException {

		try {
			FileInputStream arquivo = new FileInputStream(new File(fileName));

			HSSFWorkbook workbook = new HSSFWorkbook(arquivo);

			HSSFSheet sheetAlunos = workbook.getSheetAt(0);

			Iterator<Row> rowIterator = sheetAlunos.iterator();

			int linha = 1;
			while (rowIterator.hasNext()) {
				Row row = rowIterator.next();

				System.out.print("linha " + linha++ + " -> ");
				Iterator<Cell> cellIterator = row.cellIterator();

				while (cellIterator.hasNext()) {
					Cell cell = cellIterator.next();

					switch (cell.getColumnIndex()) {
					case 1:
					case 3:
					case 5:
					case 6:
					case 9:
					case 11:
					case 13:
					case 17:
					case 18:
						System.out.print(retornaValor(cell));
						break;
					}

					System.out.print("|");
				}

				System.out.println("");
			}
			arquivo.close();

		} catch (FileNotFoundException e) {
			e.printStackTrace();
			System.out.println("Arquivo Excel não encontrado!");
		}

	}

	public static String retornaValor(Cell cell) {
		switch (cell.getCellType()) {
		case Cell.CELL_TYPE_STRING:
			return cell.getStringCellValue();

		case Cell.CELL_TYPE_NUMERIC:
			return cell.getNumericCellValue() + "";

		case Cell.CELL_TYPE_BOOLEAN:
			return cell.getBooleanCellValue() + "";

		default:
			return "";
		}
	}

}

