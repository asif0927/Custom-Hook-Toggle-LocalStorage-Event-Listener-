import { useCallback, useState } from 'react';

const useToggle = (initialState = false) => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    return [state, toggle]
}
const UseToogle = () => {
  const [isModalOpen, setIsModalOpen] = useToggle();
  return (
    <>
        <button onClick={setIsModalOpen} style={{marginTop:"20px"}}>
          {isModalOpen ? 'Close Modal' : 'Open Modal'} 
        </button>
    </>
  )
}

export default UseToogle
