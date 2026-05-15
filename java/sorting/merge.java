import java.util.*;


public class merge {
    public static void Merge(int[] arr,int s,int e,int mid){
        int length1=mid-s+1;
        int length2=e-mid;
        int [] arr1=new int[length1];
        int [] arr2=new int[length2];
        for(int i=0;i<length1;i++){
            arr1[i]=arr[s+i];
        }
        // Buble.PrintArr(arr1);
        // System.out.println();
        for(int i=0;i<length2;i++){
            arr2[i]=arr[mid+1+i];
        }
        // Buble.PrintArr(arr2);
        // System.out.println();

        int i1=0;
        int i2=0;
        int k=s;
        // System.out.println(i1+i2+k);
        while(i1<length1&&i2<length2){
            if(arr1[i1]<arr2[i2]){
                arr[k]=arr1[i1];
                i1++;
            }
            else{
                arr[k]=arr2[i2];
                i2++;

            }
            k++;

        }
        while (i1<length1) {
            arr[k]=arr1[i1];
            i1++;
            k++;
            
        }
        while (i2<length2) {
            arr[k]=arr2[i2];
            i2++;
            k++;
            
        }

    }

    public static void MergeSort(int[] arr ,int s,int e){
        //terminating condition
        if(s>=e){
            return;
        }
        int mid=(s+e)/2;
        MergeSort(arr, s, mid);
        MergeSort(arr, mid+1, e);
        Merge(arr,s,e,mid);

    }



    public static void main (String[] args){
      int[] var1 = new int[]{1, 5, 7, 3, 5, 4, 3, 4, 12, 7, 15, 1, 5, 9, 45, 75, 8, 45, 6, 4, 1, 2, 5, 4, 2, 75, 0};
    // int[] var1 = new int[]{1,8,5,6};
      MergeSort(var1, 0, var1.length-1);
      Buble.PrintArr(var1);


    }
    
}
