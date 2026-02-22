#include<bits/stdc++.h>
using namespace std;

void sort(int arr[]){
    for(int i=1;i<4;i++){
        int key=arr[i];
        int j=i-1;
        
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j=j-1;
        }
        
        arr[j+1]=key;
        
    }
}

int main(){
    int arr[4]={69,45,4,5};
    
    sort(arr);
    
    for(int i=0;i<4;i++){
        cout<<arr[i]<<" ";
    }
}
