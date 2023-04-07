import React, { useEffect } from 'react';
import styled from 'styled-components';

/**
 * 아이콘 명칭: name + Icon
 * 파일 경로는 맞춰 줘야 함
 */

//화살표
import { ReactComponent as ArrowDefaultIcon } from '../assets/images/contents/ico_arrow_default.svg';
import { ReactComponent as ArrowDownType01Icon } from '../assets/images/contents/ico_arrow_down_type01.svg';
import { ReactComponent as ArrowDownType02Icon } from '../assets/images/contents/ico_arrow_down_type02.svg';
import { ReactComponent as ArrowUpType01Icon } from '../assets/images/contents/ico_arrow_up_type01.svg';
import { ReactComponent as ArrowDownType03Icon } from '../assets/images/contents/ico_arrow_down_type03.svg';

//검색
import { ReactComponent as SearchDefaultIcon } from '../assets/images/contents/ico_search_default.svg';
import { ReactComponent as SearchListIcon } from '../assets/images/contents/ico_search_list.svg';

//닫기
import { ReactComponent as CloseCircleIcon } from '../assets/images/contents/ico_close_circle.svg';
import { ReactComponent as CloseDefaultIcon } from '../assets/images/contents/ico_close_default.svg';

//etc
import { ReactComponent as Ex01Icon } from '../assets/images/contents/ico_ex01.svg';
import { ReactComponent as Ex02Icon } from '../assets/images/contents/ico_ex02.svg';
import { ReactComponent as Ex03Icon } from '../assets/images/contents/ico_ex03.svg';
import { ReactComponent as MarkDefaultIcon } from '../assets/images/contents/ico_mark_default.svg';
import { ReactComponent as RecycleDefaultIcon } from '../assets/images/contents/ico_recycle_default.svg';
const IconGuide = () => {
  return (
    <StyledBox>
      {/*svg width, height와  fill, stroke 는 임시 값  */}
      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <ArrowDefaultIcon style={{ fill: '#000' }} />
        <ArrowDownType01Icon style={{ fill: '#000' }} />
        <ArrowDownType02Icon style={{ fill: '#000' }} />
        <ArrowDownType03Icon style={{ fill: '#000' }} />
        <ArrowUpType01Icon style={{ fill: '#000' }} />
        <SearchDefaultIcon style={{ stroke: '#000' }} />
        <SearchListIcon style={{ fill: '#000' }} />
        <CloseCircleIcon style={{ fill: '#000' }} />
        <CloseDefaultIcon style={{ fill: '#000' }} />
      </div>

      <div className='wrapper d-flex justify-content-center gap-5 m-50'>
        <MarkDefaultIcon style={{ fill: '#000' }} />
        <RecycleDefaultIcon style={{ stroke: '#000' }} />
        <Ex01Icon style={{ fill: '#000' }} />
        <Ex02Icon style={{ fill: '#000' }} />
        <Ex03Icon style={{ fill: '#000' }} />
      </div>
    </StyledBox>
  );
};

export default IconGuide;

const StyledBox = styled.div`
  svg {
    width: 30px;
    height: auto;
  }
`;
