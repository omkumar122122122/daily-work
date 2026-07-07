package basic.array;
import java.util.*;
public class array05 {
    public static void main(String[] args){
        Scanner sc= new Scanner(System.in);
        System.out.println("enter the number of raw and colums");
        int row=sc.nextInt();
        int col=sc.nextInt();
        int [][] arr=new int [row][col];
        System.out.println("enter elements of the matrix");
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                arr[i][j]=sc.nextInt();
            }
        }
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                System.out.print(arr[i][j]);
            }
            System.out.println();
        }

    }
    
}
