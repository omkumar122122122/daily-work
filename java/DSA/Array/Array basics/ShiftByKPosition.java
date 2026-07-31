import java.util.*;
public class ShiftByKPosition {
    public static void printarr(int[] arr){
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");

        }
        System.out.println();
    }

    public static void ShiftRight(int[] arr,int k){


        for(int i=0;i<k;i++){
            int laE=arr[arr.length-1];
            for(int j=arr.length-2;j>=0;j--){
                arr[j+1]=arr[j];


            }
            arr[0]=laE;
        }
    }


    public static void main(String[] args) {
        int[] arr2={1,5,4,74,7,5,8,58,9,6,34,5,4,7,9,4,52,47};
        printarr(arr2);
        ShiftRight(arr2, 1);
        printarr(arr2);

        
    }
    
}
