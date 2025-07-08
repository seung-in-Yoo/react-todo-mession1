# 📋 Todo 앱 만들기 미션 (프로그래머스 데브코스 AI 백엔드)


## 🎯 미션 개요

해당 미션은 **React + Vite + TypeScript**를 기반으로 제작된 Todo List로,   
Todo 앱의 필수적인 구현요소들을 직접 구현하면서 배웠던 내용에 대해서 복습

---

## 🧩 주요 기능

| 기능 | 설명 |
|------|------|
| ✅ 할 일 추가 | 입력 후 `등록` 버튼 클릭 시 할 일이 리스트에 추가됩니다 |
| ❌ 할 일 삭제 | `삭제` 버튼을 누르면 해당 항목이 제거됩니다 |
| ✔️ 완료 체크 | 체크박스를 클릭하면 완료 여부에 따라 스타일이 변경됩니다 |
| 📝 할 일 수정 | `수정` 버튼을 누르면 수정 폼이 표시되며, 수정 후 저장 가능합니다 |
| 💾 localStorage 저장 | 할 일의 상태는 브라우저에 저장되어 새로고침해도 유지됩니다 |
| 🔄 초기 로드 | 앱 실행 시 localStorage에서 저장된 데이터를 불러옵니다 |

---

## 🧩 자세한 기능 설명 및 구현 화면

### 🔄 초기화면
![초기ui화면](https://github.com/user-attachments/assets/97e79224-225e-4e96-a145-37afb363ae09)

### ✅ 1. 할 일 추가
- 텍스트를 입력하고 `등록` 버튼을 누르면 할 일이 리스트에 추가됩니다.
- 입력값이 비어 있을 경우 추가되지 않도록 처리되어 있습니다.
- 입력 후 인풋 필드는 자동으로 초기화됩니다.

![리스트추가ui](https://github.com/user-attachments/assets/8cef2f4f-86fe-4697-a815-34bc539424f2)

### ❌ 2. 할 일 삭제
- 각 할 일 오른쪽의 `삭제` 버튼을 누르면 해당 항목이 리스트에서 제거됩니다.
- 제거 후 상태는 자동으로 localStorage에 저장되어 새로고침해도 반영됩니다.
  
![리스트삭제ui](https://github.com/user-attachments/assets/3587bd67-7e0a-4b72-8de3-6d6cd9ed822f)

### ✔️ 3. 완료 체크
- 각 항목 왼쪽의 체크박스를 클릭하면 `완료 여부`가 토글됩니다.
- 완료된 항목은 `회색 취소선 스타일`로 표시되어 시각적으로 구분됩니다.

![체크리스트변경ui](https://github.com/user-attachments/assets/a5112234-efeb-483c-862b-618d1c3267a0)

### 📝 4. 할 일 수정
- `수정` 버튼을 클릭하면 해당 항목이 인풋 폼으로 바뀌며 텍스트를 수정할 수 있습니다.
- `Enter` 키 또는 `저장` 버튼으로 수정이 완료되며, 기존 내용은 업데이트됩니다.
- `취소` 버튼을 클릭하면 편집 모드가 종료되고 기존 텍스트가 유지됩니다.
  
![리스트수정ui](https://github.com/user-attachments/assets/3d02d826-8059-4eae-9a38-15ea80749d83)
![리스트수정후ui](https://github.com/user-attachments/assets/ad23ea82-e295-4393-8fb1-bd69b0b036b8)

### 💾 5. localStorage 저장
- 모든 할 일 데이터는 localStorage에 저장됩니다.
- 할 일을 추가, 삭제, 수정, 체크할 때마다 상태가 자동으로 localStorage에 반영됩니다.

![리스트추가후스토리지저장](https://github.com/user-attachments/assets/9cedfa1c-b448-4704-a6e7-6dae806a1841)

### 🔄 6. 초기 로드
- 앱이 처음 실행될 때 localStorage에서 기존 데이터를 불러와 화면에 렌더링합니다.
- 저장된 데이터가 없을 경우 기본 할 일 세트가 표시됩니다.

![초기로드화면](https://github.com/user-attachments/assets/75372eed-2f99-4b35-b71a-2aeffc8f2723)



## 🛠 기술 스택

- **React + Vite**
- **TypeScript**
- **Context API + Custom Hook**
- **TailwindCSS (CDN 기반)**

## 📁 폴더 구조

```bash
react-todo-mession1/
├── public/                    
├── src/                        
│   ├── assets/                
│   ├── components/            
│   │   ├── TodoItem.tsx         # 투두 항목 렌더링 및 수정/삭제/완료 처리
│   │   ├── TodoList.tsx         # Todo 리스트 렌더링
│   │   └── TodoWriteForm.tsx    # 투두 입력 폼
│   ├── context/               
│   │   └── TodoContext.tsx      # Todo 상태 관리 및 로직 
│   ├── types/                
│   │   └── todo.ts              # Todo 타입 인터페이스 정의
│   ├── utils/                 
│   │   └── storage.ts           # localStorage 저장/불러오기 함수
│   ├── App.tsx               
│   ├── main.tsx               
│   └── vite-env.d.ts         
├── .eslintrc / eslint.config.js # ESLint 설정 
├── .gitignore                
├── .prettierrc                # Prettier 코드 스타일 설정
├── index.html                
├── package.json              
├── tsconfig.json             
├── tsconfig.app.json        
├── tsconfig.node.json        
├── vite.config.ts            
└── README.md                 



