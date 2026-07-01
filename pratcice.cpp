#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;

    Node(int x) {
        data = x;
        next = NULL;
    }
};

Node* head = NULL;
Node* tail = NULL;

void insertAtFirst(int x) {
    Node* newNode = new Node(x);

    if (head == NULL) {
        head = tail = newNode;
        return;
    }

    newNode->next = head;
    head = newNode;
}

void insertAtTail(int x) {
    Node* newNode = new Node(x);

    if (head == NULL) {
        head = tail = newNode;
        return;
    }

    // tail->next = newNode;
    // tail = newNode;

    Node* temp=head;
    while(temp->next!=NULL){
        temp=temp->next;

    }

    temp->next=newNode;

}

void print() {
    Node* temp = head;

    while (temp != NULL) {
        cout << temp->data << " ";
        temp = temp->next;
    }
}

int main() {

    insertAtFirst(20);
    insertAtFirst(30);

    insertAtTail(40);
    insertAtTail(90);

    print();

    return 0;
}