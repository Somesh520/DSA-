// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
void swap(int &x,int &y){
    int z= x;
     x= y;
     y=z;
}
void sortarray(int arr[],int n){
    for(int i=0;i<n-1;i++){
        int min=i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        swap(arr[i],arr[min]);
    }
}



void print(int arr[],int n){
    
    for(int i=0;i<n;i++){
        cout<<arr[i] <<" ";
    }
    //yeha new line jaur dena hai
  cout<<endl;
}
int main() {
   int arr[10]={23,54,67,34,11};
   sortarray(arr,5);
   print(arr,5);

    
}