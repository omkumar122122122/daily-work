import java.util.*;
public class array03 {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int row=4;
        int col=4;
        int[][] arr=new int[row][col];
        System.out.println("enter elements of array");
        for(int i=0;i<row;i++){
            System.out.println("enter element of row"+(i+1)+"\n");
            for(int j=0;j<col;j++){
                arr[i][j]=sc.nextInt();
            }
        }
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                System.out.print(arr[i][j]+" ");
            }
            System.out.println();
        }


       
        
    }
}
