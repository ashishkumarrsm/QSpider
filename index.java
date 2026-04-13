class Main {
    public static void main(String[] args) {
        int n = 5;
        for(int i=1; i<n; i++){
            // space
            for(int j=n-i; j>=1; j--){
                System.out.print(" ");
            }
            System.out.print("* ");
            // space
            for(int j=1; j<i+1; j++){
                System.out.print("  ");
            }
            System.out.println("* ");
        }
        for(int i=0; i<n; i++) System.out.print("*       ");
    }
}