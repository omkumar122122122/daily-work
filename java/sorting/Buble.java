import java .util.*;

public class Buble {
    public static void BubleSort(int []arr){
        for(int i=arr.length;i>0;i--){
            for(int j=0;j<i-1;j++){
                if(arr[j]>arr[j+1]){
                    int temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                }
            }

        }
    }
    public static void PrintArr(int[] arr){
        System.out.print("[");
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
        }
        System.out.print("]");

    }

    
    public static void main(String[] args){
        int[]arr={1,2,8,12,8,7,6,4,2};
        BubleSort(arr);
        PrintArr(arr);



    }
}
