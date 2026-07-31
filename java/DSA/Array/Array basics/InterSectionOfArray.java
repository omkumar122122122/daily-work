public class InterSectionOfArray {
    public static void PrintIntersection(int[]arr1,int[]arr2){
        for(int i=0;i<arr1.length;i++){
            for(int j=0;j<arr2.length;j++){
                if(arr1[i]==arr2[j]){
                    System.out.println(arr1[i]);

                }
            }

        }
    }
    public static void main(String[] args) {
        int[] arr1={1,99};
        int[] arr2={1,5,4,74,7,5,8,58,9,6,34,5,4,7,9,4,52,47};
        PrintIntersection(arr1, arr2);
    }
    
}
