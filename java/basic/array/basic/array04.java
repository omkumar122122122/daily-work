package basic.array.basic;
import java.util.*;
public class array04 {
    public static void main(String[] args){

        Scanner sc =new Scanner(System.in);
        System.out.println("enter elementes of the matrix");
        int row=4;
        int col=4;
        int[][] arr=new int[row][col];
        for(int i=0;i<row;i++){
            System.out.println("enter the elements of row "+(i+1));
            for(int j=0;j<col;j++){
                arr[i][j]=sc.nextInt();

            }

        }
        System.out.println("enter number to search");
        int n=sc.nextInt();
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                if(arr[i][j]==n){
                    System.out.println(n+" found at index number  row= "+i+" col= "+j);
                }

            }


            

        }







        

        
    }  
}
