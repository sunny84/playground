import pygame
# 게임 스크린 크기
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
# 색상 전역변수
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GRAY = (150, 150, 150)
RED = (200, 0, 0)
# pygame 초기화
pygame.init()
# 윈도우 제목
pygame.display.set_caption("pygame")
# 스크린 정의
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
# 게임 화면 업데이트 속도
clock = pygame.time.Clock()
# 게임 진행 여부를 판단하는 변수 : 게임 종료 전까지 반복
done = False 
# 게임 반복 구간
while not done: 
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True

    # 게임 로직 구간

    # 화면 삭제 구간

    # 스크린 채우기
    screen.fill(WHITE)

    # 화면 그리기 구간

    # 화면 업데이트
    pygame.display.flip()

    # 초당 60 프레임으로 업데이트
    clock.tick(60)

# 게임 종료
pygame.quit()