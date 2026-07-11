import java.util.*;

public class QuickSort {
    public static int pivot(int[]arr,int s,int e){
        int pot=arr[e];
        int potIdx=s;

        for(int i=s;i<e;i++){
            if(arr[i]<pot){
                int temp=arr[i];
                arr[i]=arr[potIdx];
                arr[potIdx]=temp;
                potIdx++;
            }
        }
        int temp=arr[e];
        arr[e]=arr[potIdx];
        arr[potIdx]=temp;





        return potIdx;
    }

    public static void quicksort(int[] arr,int s,int e){
        if(s>=e){
            return;
        }

        int p=pivot(arr, s, e);
        quicksort(arr, s, p-1);
        quicksort(arr, p+1, e);
    }




    public static void main(String[] args){


      int[] var1 = new int[]{1, 5, 7, 3, 5, 4, 3, 4, 12, 7, 15, 1, 5, 9, 45, 75, 8, 45, 6, 4, 1, 2, 5, 4, 2, 75, 0};
        quicksort(var1, 0, var1.length-1);
        Buble.PrintArr(var1);



    }
    
}
