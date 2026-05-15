import java.util.*;


public class selection {
    
    public static void selection_sort(int [] arr){
        for(int i=0;i<arr.length;i++){
            int smallIndx=i;
            for(int j=i;j<arr.length;j++){
                if(arr[smallIndx]>arr[j]){
                    smallIndx=j;
                }


            }
            int temp=arr[i];
            arr[i]=arr[smallIndx];
            arr[smallIndx]=temp;

        }
    }
    public static void main(String[] argd){
        // Buble.BubleSort(arr);
        int[] arr={1,5,7,3,5,4,3,4,12,7,15,1,5,9,45,75,8,45,6,4,1,2,5,4,2,75,0};
        selection_sort(arr);
        Buble.PrintArr(arr);
    }
    
}
